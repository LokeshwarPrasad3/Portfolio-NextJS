import {
  FullStackProjectsArray,
  ReactFrontendProjectsArray,
  FrontendProjectsArray,
  Project,
} from "@/components/home/projects/project-data";

export const allProjects: Project[] = [
  ...FullStackProjectsArray,
  ...ReactFrontendProjectsArray,
  ...FrontendProjectsArray,
];

// Lightweight mapping to normalize common variations
const techMapping: Record<string, string> = {
  nextjs: "next.js",
  next: "next.js",
  node: "node.js",
  nodejs: "node.js",
  expressjs: "express",
  express: "express",
  ts: "typescript",
  js: "javascript",
  mongodb: "mongodb",
  mongo: "mongodb",
  socket: "socket.io",
  socketio: "socket.io",
  reactjs: "react",
  react: "react",
  tailwind: "tailwind",
  tailwindcss: "tailwind",
  postgres: "postgresql",
  postgresql: "postgresql",
};

/**
 * Normalizes a tech input using the mapping, fallback to lowercase.
 */
function normalizeTech(tech: string): string {
  const lower = tech.toLowerCase().trim();
  return techMapping[lower] || lower;
}

/**
 * Lightweight utility to match projects by tech keyword.
 * - Max 3
 * - No duplicate projects
 * - No "#" liveLinks
 */
export function getProjectsByTech(techKeyword: string): Project[] {
  const normalizedKeyword = normalizeTech(techKeyword);
  const matchedProjects: Project[] = [];
  const seenIds = new Set<string>();

  for (const project of allProjects) {
    // Return max 3
    if (matchedProjects.length >= 3) break;

    // Ignore projects with placeholder links
    if (project.liveLink === "#") continue;

    // Check if any tech in stack matches
    const hasMatch = project.techStack.some((tech) => {
      const normalizedStackTech = normalizeTech(tech);
      return (
        normalizedStackTech.includes(normalizedKeyword) ||
        normalizedKeyword.includes(normalizedStackTech)
      );
    });

    if (hasMatch && !seenIds.has(project.id)) {
      matchedProjects.push(project);
      seenIds.add(project.id);
    }
  }

  return matchedProjects;
}

export function formatProjectsForAI(projects: Project[]): string {
  if (projects.length === 0) return "No specific projects found for this technology.";

  return projects
    .map(
      (p, i) =>
        `${i + 1}) ${p.title}\n   ${p.description}\n   Tech Used: ${p.techStack.join(", ")}\n   Live: ${p.liveLink}\n   Repo: ${p.repoLink}`
    )
    .join("\n\n");
}

// Lightweight list of common tech keywords to look for in the user's message
export const TECH_KEYWORDS = [
  "react",
  "next",
  "next.js",
  "nextjs",
  "node",
  "node.js",
  "nodejs",
  "express",
  "expressjs",
  "mongodb",
  "mongo",
  "socket",
  "socket.io",
  "tailwind",
  "tailwindcss",
  "typescript",
  "ts",
  "javascript",
  "js",
  "html",
  "css",
  "postgresql",
  "postgres",
  "sql",
  "redux",
  "zustand",
  "prisma",
];

/**
 * Dynamically builds the final system prompt based on user query keywords
 */
export function buildSystemPrompt(lastUserMessage: string, basePrompt: string): string {
  // Find if any tech keyword is mentioned
  const matchedTech = TECH_KEYWORDS.find((tech) => lastUserMessage.includes(tech));

  let finalSystemPrompt = basePrompt;

  if (matchedTech) {
    const projects = getProjectsByTech(matchedTech);
    if (projects.length > 0) {
      const dynamicContext =
        `\n\n### RELEVANT PROJECTS FOR THIS QUERY ###\nThe user asked about a technology related to "${matchedTech}". Here are his actual real projects using this technology. Use ONLY this data to confidently answer their question in the requested response format. NEVER invent projects.\n\n` +
        formatProjectsForAI(projects);
      finalSystemPrompt += dynamicContext;
    }
  }

  return finalSystemPrompt;
}
