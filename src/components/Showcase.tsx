import { Link } from 'react-router-dom';
import skipWriteCodeSnippet from '../assets/screenshots/code-snippet1.png';
import testCoverageScreenshot from '../assets/screenshots/test-coverage1.png';
import getblockfilterCodeSnippet from '../assets/screenshots/code-snippet2.png';
import getblockfilterTestCoverageScreenshot from '../assets/screenshots/test-coverage2.png';
import sparrowWalletVideo from '../assets/videos/sparrow-wallet-video.mp4';
import sparrowMultisigCodeSnippet from '../assets/screenshots/code-snippet3.png';
import sparrowSinglesigCodeSnippet from '../assets/screenshots/code-snippet4.png';
import sparrowSilentPaymentCodeSnippet from '../assets/screenshots/code-snippet5.png';

type ShowcaseItem = {
    title: string;
    description: string;
    url: string;
    number?: number;
    videoSrc?: string;
    screenshots?: {
        src: string;
        alt: string;
        caption: string;
    }[];
};

type ShowcaseCategory = {
    title: 'PRs' | 'Reviews' | 'Issues';
    items: ShowcaseItem[];
};

type ShowcaseProject = {
    title: string;
    categories: ShowcaseCategory[];
};

type FutureWorkItem = {
    title: string;
    description: string;
    screenshots?: {
        src: string;
        alt: string;
        caption: string;
    }[];
};

const showcaseProjects: ShowcaseProject[] = [
    {
        title: 'Bitcoin Core',
        categories: [
            {
                title: 'PRs',
                items: [
                    // Add one object per contribution:
                    {
                        title: ' test: Add SKIP_WRITE edge case to wallet_startup',
                        description: 'Verified the SKIP_WRITE edge case in wallet startup.',
                        url: 'https://github.com/bitcoin/bitcoin/pull/36378',
                        number: 36378,
                        screenshots: [
                            {
                                src: skipWriteCodeSnippet,
                                alt: 'First screenshot of the completed work',
                                caption: 'Code snippet in src/node/interfaces.cpp',
                            },
                            {
                                src: testCoverageScreenshot,
                                alt: 'Second screenshot of the completed work',
                                caption: 'Test coverage for SKIP_WRITE edge case in test/functional/wallet_startup.py',
                            },
                        ],
                    },
                    {
                        title: ' test: add getblockfilter test coverage for header-only blocks',
                        description: 'Added getblockfilter test to cover error code returned for header-only blocks.',
                        url: 'https://github.com/bitcoin/bitcoin/pull/36613',
                        number: 36613,
                        screenshots: [
                            {
                                src: getblockfilterCodeSnippet,
                                alt: 'First screenshot of the completed work',
                                caption: 'Code snippet in src/rpc/blockchain.cpp',
                            },
                            {
                                src: getblockfilterTestCoverageScreenshot,
                                alt: 'Second screenshot of the completed work',
                                caption: 'Test coverage for getblockfilter in test/functional/rpc_getblockfilter.py',
                            },
                        ],
                    },
                ],
            },
            { title: 'Reviews', 
                items: [
                    {
                        title: ' psbt: add new test vectors',
                        description: 'Reviewed the addition of BIP174 test vectors to verify that PSBT combining ' +
                        'preserves sighash information and that deserialization correctly rejects malformed PSBTs ' +
                        'with inconsistent value sizes',
                        url: 'https://github.com/bitcoin/bitcoin/pull/36329#issuecomment-5826866145',
                        number: 36329,
                        screenshots: [],
                    },
                    {
                        title: ' test: add script_tests cases covering more interpreter mutants',
                        description: 'Reviewed and locally tested three new script test vectors using mutation testing ' +
                        'to verify that Bitcoin Core correctly enforces Tapscript minimal-IF rules.',
                        url: 'https://github.com/bitcoin/bitcoin/pull/36128#issuecomment-5852047259',
                        number: 36128,
                        screenshots: [],
                    },
                    {
                        title: ' test: speed up functional tests by removing avoidable waits',
                        description: 'Reviewed and benchmarked functional test optimizations that eliminate unnecessary polling ' +
                        'and transaction relay delays, locally verifying a 12% reduction in accumulated test execution time and a ' +
                        '7.5% reduction in overall runtime',
                        url: 'https://github.com/bitcoin/bitcoin/pull/36440#issuecomment-6027174987',
                        number: 36440,
                        screenshots: [],
                    },
                ] },
            { title: 'Issues', 
                items: [
                    {
                        title: ' ci: subtree lint scope',
                        description: 'Claimed this issue and opened a PR to address it, but ' +
                        'my PR was closed because a contributor said they might go another direction.',
                        url: 'https://github.com/bitcoin/bitcoin/issues/34928#issuecomment-6596049026',
                        number: 34928,
                        screenshots: [],
                    },
                ] },
        ],
    },
    {
        title: 'Sparrow Wallet',
        categories: [
            { title: 'PRs', 
                items: [
                    {
                        title: ' Add multisig UR output descriptor export coverage',
                        description: 'Added regression test coverage for multisig Uniform Resources (UR) output descriptor ' +
                        'exports to ensure signing thresholds, script types, cosigner information, and key derivation paths are ' +
                        'correctly preserved, improving wallet interoperability.',
                        url: 'https://github.com/sparrowwallet/sparrow/pull/2120',
                        number: 2120,
                        videoSrc: sparrowWalletVideo,
                        screenshots: [
                            {
                                src: sparrowMultisigCodeSnippet,
                                alt: 'First screenshot of the completed work',
                                caption: 'Code snippet in src/main/java/com/sparrowwallet/sparrow/wallet/SettingsController.java ' +
                                'for multisig UR output descriptor export',
                            },
                        ],
                    },
                    {
                        title: ' Add single signature output descriptor coverage & generalize test helpers',
                        description: 'Extended regression test coverage for single-signature Uniform Resources (UR) output descriptor ' +
                        'exports across native SegWit, nested SegWit, Taproot, and legacy P2PKH script types, while refactoring existing ' +
                        'test helpers to reduce code duplication and improve maintainability.',
                        url: 'https://github.com/sparrowwallet/sparrow/pull/2128',
                        number: 2128,
                        screenshots: [
                            {
                                src: sparrowSinglesigCodeSnippet,
                                alt: 'First screenshot of the completed work',
                                caption: 'Code snippet in src/main/java/com/sparrowwallet/sparrow/wallet/SettingsController.java ' +
                                'for single-signature UR output descriptor',
                            },
                        ],
                    },
                ] },
            { title: 'Issues', 
                items: [
                    {
                        title: ' Adding test coverage to help prevent regression',
                        description: 'Opened a discussion with Sparrow Wallet maintainers to identify gaps in existing test coverage ' +
                        'and determine where additional regression, edge-case, and interoperability tests would provide the most value to the project.',
                        url: 'https://github.com/sparrowwallet/sparrow/issues/2114',
                        number: 2114,
                    },
                ] },
        ],
    },
];

const futureWorkByProject: { title: string; items: FutureWorkItem[] }[] = [
    { title: 'Bitcoin Core', 
        items: [
            {
                title: 'Consistent Reviews and Test Coverage',
                description: 'Continue reviewing code and adding test coverage to learn the codebase and help improve overall project quality',
                screenshots: [
                ],
            },
        ] },
    { title: 'Sparrow Wallet', 
        items: [
            {
                title: 'Cover silent payment branch',
                description: 'Extend test coverage for getUROutputDescriptor by adding tests for silent payment branch',
                screenshots: [
                    {
                        src: sparrowSilentPaymentCodeSnippet,
                        alt: 'First screenshot of the completed work',
                        caption: 'Code snippet in src/main/java/com/sparrowwallet/sparrow/wallet/SettingsController.java ' +
                        'for silent payment UR output descriptor',
                    },
                ],
            },
            {
                title: 'Look into recent bug fixes',
                description: 'Extend test coverage for recent bug fixes made in the project',
                screenshots: [
                ],
            },
        ] },
];

export default function Showcase() {
    return (
        <main className="min-h-screen bg-zinc-800 py-32 text-white">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="mb-8 rounded bg-sky-900 px-12 py-8 shadow-xl shadow-black/30">
                    <h1 className="text-center text-4xl font-bold">BTrust Fellowship Showcase</h1>
                </div>

                <div className="mx-auto max-w-4xl space-y-10">
                    {showcaseProjects.map((project) => {
                        const projectId = project.title.toLowerCase().replace(/\s+/g, '-');

                        return (
                        <section key={project.title} aria-labelledby={`${projectId}-heading`} className="space-y-6">
                            <h2
                                id={`${projectId}-heading`}
                                className="border-b border-zinc-600 pb-3 text-2xl font-bold"
                            >
                                {project.title}
                            </h2>
                            {project.categories.map((category) => (
                                <section
                                    key={category.title}
                                    aria-labelledby={`${projectId}-${category.title.toLowerCase()}-heading`}
                                    className="space-y-4"
                                >
                                    <h3
                                        id={`${projectId}-${category.title.toLowerCase()}-heading`}
                                        className="text-xl font-semibold text-sky-200"
                                    >
                                        {category.title}
                                    </h3>
                                    {category.items.length > 0 ? (
                                        <div className="space-y-4">
                                            {category.items.map((item) => (
                                                <article
                                                    key={item.url}
                                                    className="rounded-lg bg-zinc-700 p-6 shadow-lg"
                                                >
                                                    <h4 className="text-lg font-bold">
                                                        {item.number && (
                                                            <a
                                                                href={item.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label={`Open ${category.title.toLowerCase()} #${item.number}`}
                                                                className="mr-2 text-sky-300 underline hover:text-sky-200"
                                                            >
                                                                #{item.number}
                                                            </a>
                                                        )}
                                                        {item.title}
                                                    </h4>
                                                    <p className="mt-2 text-gray-200">{item.description}</p>
                                                    {item.videoSrc && (
                                                        <video
                                                            src={item.videoSrc}
                                                            controls
                                                            preload="metadata"
                                                            className="mt-5 aspect-video w-full rounded-lg bg-black"
                                                            aria-label={`Video demonstration for ${item.title}`}
                                                        >
                                                            Your browser does not support embedded video.
                                                        </video>
                                                    )}
                                                    {item.screenshots && item.screenshots.length > 0 && (
                                                        <div className="mt-5 grid grid-cols-1 gap-4">
                                                            {item.screenshots.map((screenshot) => (
                                                                <figure key={screenshot.src}>
                                                                    <img
                                                                        src={screenshot.src}
                                                                        alt={screenshot.alt}
                                                                        className="max-h-96 w-full rounded-lg object-contain"
                                                                        loading="lazy"
                                                                    />
                                                                    <figcaption className="mt-2 text-center text-sm text-gray-300">
                                                                        {screenshot.caption}
                                                                    </figcaption>
                                                                </figure>
                                                            ))}
                                                        </div>
                                                    )}
                                                </article>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="rounded-lg bg-zinc-700 p-5 text-gray-200 shadow-lg">
                                            Add {project.title} {category.title} here.
                                        </p>
                                    )}
                                </section>
                            ))}
                        </section>
                        );
                    })}
                </div>

                <section aria-labelledby="future-work-heading" className="mx-auto mt-16 max-w-4xl space-y-4">
                    <h2
                        id="future-work-heading"
                        className="border-b border-zinc-600 pb-3 text-2xl font-bold"
                    >
                        Future Work to Complete
                    </h2>
                    <div className="space-y-6">
                        {futureWorkByProject.map((project) => (
                            <section
                                key={project.title}
                                aria-labelledby={`future-${project.title.toLowerCase().replace(/\s+/g, '-')}-heading`}
                                className="space-y-4"
                            >
                                <h3
                                    id={`future-${project.title.toLowerCase().replace(/\s+/g, '-')}-heading`}
                                    className="text-xl font-semibold text-sky-200"
                                >
                                    {project.title}
                                </h3>
                                {project.items.length > 0 ? (
                                    <div className="space-y-4">
                                        {project.items.map((item) => (
                                            <article
                                                key={item.title}
                                                className="rounded-lg bg-zinc-700 p-6 shadow-lg"
                                            >
                                                <h4 className="text-lg font-bold">{item.title}</h4>
                                                <p className="mt-2 text-gray-200">{item.description}</p>
                                                {item.screenshots && item.screenshots.length > 0 && (
                                                    <div className="mt-5 grid grid-cols-1 gap-4">
                                                        {item.screenshots.map((screenshot) => (
                                                            <figure key={screenshot.src}>
                                                                <img
                                                                    src={screenshot.src}
                                                                    alt={screenshot.alt}
                                                                    className="max-h-96 w-full rounded-lg object-contain"
                                                                    loading="lazy"
                                                                />
                                                                <figcaption className="mt-2 text-center text-sm text-gray-300">
                                                                    {screenshot.caption}
                                                                </figcaption>
                                                            </figure>
                                                        ))}
                                                    </div>
                                                )}
                                            </article>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="rounded-lg bg-zinc-700 p-5 text-gray-200 shadow-lg">
                                        Add {project.title} future work here.
                                    </p>
                                )}
                            </section>
                        ))}
                    </div>
                </section>

                <div className="mt-8 text-center">
                    <Link to="/#experience" className="text-sky-300 underline transition-colors hover:text-sky-200">
                        &larr; Back to Experience
                    </Link>
                </div>
            </div>
        </main>
    );
}
