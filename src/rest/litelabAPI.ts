import { User } from "react-feather";
import { Repo } from "../vcs/vcs";

const mockRepo = (name: string): Repo => {
  return {
    name,
    author: {
      name: "kpg",
      email: "kpg@karweusz.pl",
      image: new URL("https://galkowski.xyz/openjdk.jpg")
    },
    content: "My super project",
    thread: [],
    tags: new Set([]),
    timestamp: new Date(),
    stargazers: new Set([]),
    branches: new Set([]),
    forkedFrom: null
  }
}

// A mock function to mimic making an async request for data
export function fetchProject(name: string) {
    return new Promise<{ data: Repo }>((resolve) =>
      setTimeout(() => resolve({ data: mockRepo(name) }), 500)
    );
  }
  