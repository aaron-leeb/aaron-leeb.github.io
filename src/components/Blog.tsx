import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';

interface PostManifest {
  file: string;
  title?: string;
}

interface FetchedPost extends PostManifest {
  content?: string;
  loadError?: string;
  sourceUrl?: string;
}

const USERNAME = 'aaron-leeb';
const REPO = 'btrust-fellowship';
const BRANCH = 'main';
const BASE_URL = `https://raw.githubusercontent.com/${USERNAME}/${REPO}/${BRANCH}`;
const PREVIEW_LENGTH = 420;

// Blog post markdown uses relative asset paths, so resolve them against the source file.
const resolveMarkdownUrl = (url: string | undefined, sourceUrl: string | undefined) => {
  if (!url) {
    return undefined;
  }

  if (!sourceUrl || /^[a-z]+:/i.test(url) || url.startsWith('//') || url.startsWith('#')) {
    return url;
  }

  try {
    return new URL(url, sourceUrl).toString();
  } catch {
    return url;
  }
};

// Apply site-specific styling to markdown so remote posts match the rest of the portfolio.
const createMarkdownComponents = (sourceUrl?: string): Components => ({
  h1: ({ ...props }) => <h1 className="mt-8 mb-4 text-3xl font-bold text-white first:mt-0" {...props} />,
  h2: ({ ...props }) => <h2 className="mt-8 mb-4 text-2xl font-bold text-white first:mt-0" {...props} />,
  h3: ({ ...props }) => <h3 className="mt-6 mb-3 text-xl font-semibold text-white first:mt-0" {...props} />,
  p: ({ ...props }) => <p className="mb-4 leading-8 text-gray-100" {...props} />,
  ul: ({ ...props }) => <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-100" {...props} />,
  ol: ({ ...props }) => <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-100" {...props} />,
  li: ({ ...props }) => <li className="leading-8" {...props} />,
  a: ({ href, ...props }) => (
    <a
      className="text-sky-300 underline transition-colors hover:text-sky-200 hover:no-underline"
      target="_blank"
      rel="noopener noreferrer"
      href={resolveMarkdownUrl(href, sourceUrl)}
      {...props}
    />
  ),
  blockquote: ({ ...props }) => (
    <blockquote className="mb-4 border-l-4 border-sky-700 pl-4 italic text-gray-200" {...props} />
  ),
  code: ({ className, children, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="rounded bg-zinc-950 px-1.5 py-0.5 font-mono text-sm text-sky-200"
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <code className="font-mono text-sm text-gray-100" {...props}>
        {children}
      </code>
    );
  },
  pre: ({ ...props }) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm text-gray-100 shadow-inner shadow-black/40"
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-8 border-zinc-600" {...props} />,
  img: ({ src, alt, ...props }) => (
    <img
      className="my-6 max-h-[32rem] w-full rounded-lg object-contain shadow-lg shadow-black/30"
      src={resolveMarkdownUrl(src, sourceUrl)}
      alt={alt ?? ''}
      loading="lazy"
      {...props}
    />
  ),
});

// Posts may include lightweight frontmatter; strip it before rendering the article body.
const parseFrontmatter = (content: string) => {
  if (!content.startsWith('---\n')) {
    return {
      body: content,
    };
  }

  const frontmatterEnd = content.indexOf('\n---\n', 4);
  if (frontmatterEnd === -1) {
    return {
      body: content,
    };
  }

  const frontmatter = content.slice(4, frontmatterEnd).split('\n');
  const metadata: Record<string, string> = {};

  for (const line of frontmatter) {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim().toLowerCase();
    const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, '');
    metadata[key] = value;
  }
  return {
    body: content.slice(frontmatterEnd + 5).trim(),
    title: metadata.title,
  };
};

// Derive a stable card title and remove a duplicate top heading from the markdown body.
const extractPostDetails = (post: PostManifest, content: string) => {
  const normalizedContent = content.replace(/\r\n/g, '\n').trim();
  const frontmatter = parseFrontmatter(normalizedContent);
  let body = frontmatter.body.trim();
  const firstHeadingMatch = body.match(/^#{1,6}\s+(.+)$/m);
  const derivedTitleFromHeading = firstHeadingMatch?.[1]?.trim();
  const derivedTitleFromFile = post.file.replace(/\.[^.]+$/, '').trim();
  const title = post.title?.trim() || frontmatter.title?.trim() || derivedTitleFromHeading || derivedTitleFromFile;

  if (firstHeadingMatch && derivedTitleFromHeading && title === derivedTitleFromHeading && body.startsWith(firstHeadingMatch[0])) {
    body = body.slice(firstHeadingMatch[0].length).trimStart();
  }

  return {
    title,
    body,
  };
};

export default function Blog() {
  // posts holds the normalized markdown content, while expandedPosts tracks which cards are open.
  const [posts, setPosts] = useState<FetchedPost[]>([]);
  const [expandedPosts, setExpandedPosts] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const togglePost = (file: string) => {
    setExpandedPosts((current) => ({
      ...current,
      [file]: !current[file],
    }));
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // The manifest is the source of truth for which remote markdown files should be shown.
        const manifestResponse = await fetch(`${BASE_URL}/manifest.json`);
        if (!manifestResponse.ok) {
          throw new Error(`Unable to load manifest (${manifestResponse.status} ${manifestResponse.statusText})`);
        }

        const manifest: PostManifest[] = await manifestResponse.json();

        const fetchedPosts = await Promise.all(
          manifest.map(async (post) => {
            const sourceUrl = `${BASE_URL}/${post.file}`;
            const mdResponse = await fetch(sourceUrl);

            if (!mdResponse.ok) {
              return {
                ...post,
                sourceUrl,
                loadError: `Unable to load ${post.file} (${mdResponse.status} ${mdResponse.statusText})`,
              };
            }

            const rawContent = await mdResponse.text();
            // Normalize title/body once so rendering stays simple.
            const extractedPost = extractPostDetails(post, rawContent);

            return {
              ...post,
              title: extractedPost.title,
              sourceUrl,
              content: extractedPost.body,
            };
          })
        );

        setPosts(fetchedPosts);
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError(err instanceof Error ? err.message : 'An unexpected error occurred while loading blog posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-800 py-32 text-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="mx-auto mb-8 block rounded bg-sky-900 px-12 py-8 shadow-xl shadow-black/30">
            <h1 className="text-center text-4xl font-bold">Blog</h1>
          </div>
          <div className="rounded-lg border border-red-500/40 bg-zinc-700 p-6 shadow-lg">
            <p className="text-lg font-semibold text-red-300">Error loading blog posts.</p>
            <p className="mt-2 text-gray-200">{error}</p>
          </div>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-800 py-32 text-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="mx-auto mb-8 block rounded bg-sky-900 px-12 py-8 shadow-xl shadow-black/30">
            <h1 className="text-center text-4xl font-bold">Blog</h1>
          </div>
          <div className="rounded-lg bg-zinc-700 p-6 shadow-lg">
            <p className="text-lg text-gray-100">Loading posts...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-800 py-32 text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="mx-auto mb-8 block rounded bg-sky-900 px-12 py-8 shadow-xl shadow-black/30">
          <h1 className="text-center text-4xl font-bold">Blog</h1>
        </div>
        <div className="mx-auto max-w-4xl space-y-8">
          {posts.map((post) => {
            const content = post.content ?? '';
            const isExpanded = Boolean(expandedPosts[post.file]);
            const hasOverflow = content.trim().length > PREVIEW_LENGTH;

            return (
              <article key={post.file} className="rounded-lg bg-zinc-700 p-8 shadow-lg shadow-black/20">
                <header className="mb-6 border-b border-zinc-600 pb-6">
                  <h2 className="text-3xl font-bold text-white">{post.title ?? post.file}</h2>
                </header>

                {post.loadError ? (
                  <div className="rounded-md border border-red-500/40 bg-zinc-800 p-4 text-red-300">
                    {post.loadError}
                  </div>
                ) : (
                  <div className="text-base">
                    {/* Keep markdown rendering consistent and only clip the collapsed preview. */}
                    <div className={!isExpanded && hasOverflow ? 'relative max-h-80 overflow-hidden' : undefined}>
                      <ReactMarkdown components={createMarkdownComponents(post.sourceUrl)}>
                        {content}
                      </ReactMarkdown>
                      {!isExpanded && hasOverflow && (
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-700 via-zinc-700/95 to-transparent" />
                      )}
                    </div>

                    {hasOverflow && (
                      <button
                        type="button"
                        onClick={() => togglePost(post.file)}
                        className="mt-6 inline-flex rounded-md bg-sky-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}