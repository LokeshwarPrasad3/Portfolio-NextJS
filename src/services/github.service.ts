export interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
  location?: string;
}

export const fetchGithubUser = async (username: string): Promise<GithubUser | null> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("Failed to fetch github user");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching github user:", error);
    return null;
  }
};
