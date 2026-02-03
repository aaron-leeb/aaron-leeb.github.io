import { useState, useEffect } from "react";

export interface GitHubProfile {
    avatar_url: string;
    login: string;
    name: string | null;
    bio: string | null;
    url: string;
    public_repos: number;
    public_gists: number;
}

export interface GitHubEvent {
    id?: string;
    type: string;
    repo: { name: string };
    payload?: { commits?: any[] };
    created_at: string;
}

export const useGitHubProfile = (username: string) => {
    const [githubProfile, setGithubProfile] = useState<GitHubProfile | null>(null);
    const [contributions, setContributions] = useState<GitHubEvent[]>([]);
    const [loading, setLoading] = useState(true);

    const formatEvent = (eventType: string) => {
        switch (eventType) {
            case "PushEvent":
                return "Pushed commits";
            case "PullRequestEvent":
                return "Opened a pull request";
            case "IssuesEvent":
                return "Updated an issue";
            case "IssueCommentEvent":
                return "Commented on an issue";
            case "CreateEvent":
                return "Created a repository";
            default:
                return "Recent activity";
        }
    };

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                // Fetch profile from REST API
                const profileResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!profileResponse.ok) {
                    throw new Error(`GitHub profile request failed: ${profileResponse.status}`);
                }
                const profileData = await profileResponse.json();

                console.info("GitHub profile data:", profileData);

                const profileDataObj: GitHubProfile = {
                    avatar_url: profileData.avatar_url,
                    login: profileData.login,
                    name: profileData.name,
                    bio: profileData.bio,
                    url: profileData.html_url,
                    public_repos: profileData.public_repos,
                    public_gists: profileData.public_gists,
                };
                setGithubProfile(profileDataObj);

                // Fetch recent public events for activity
                const eventsResponse = await fetch(
                    `https://api.github.com/users/${username}/events/public?per_page=10`
                );
                if (!eventsResponse.ok) {
                    throw new Error(`GitHub events request failed: ${eventsResponse.status}`);
                }
                const eventsData: GitHubEvent[] = await eventsResponse.json();
                setContributions(eventsData);


            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGithubData();
    }, [username]);

    return { githubProfile, contributions, loading, formatEvent };
};
