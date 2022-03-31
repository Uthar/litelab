import _ from "lodash";
import { Dir, Repo } from "../vcs/vcs";


const mockDelay = 100;

////// Repo

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
    tags: [],
    timestamp: new Date(),
    stargazers: [],
    branches: [{name: "trunk"}, {name: "experiment"}],
    forkedFrom: null
  }
}

export function fetchProject(name: string) {
  return new Promise<{ data: Repo }>((resolve) =>
    setTimeout(() => resolve({ data: mockRepo(name) }), mockDelay)
  );
}

////// Dir

const mockDirs = (): Dir[] => _.shuffle([
  {
    name: "README.txt",
    commit: {
      hash: "13801293757019283123",
      timestamp: new Date(),
      content: "Changed a thing"
    }
  },
  {
    name: "shell.nix",
    commit: {
      hash: "11231237019283123",
      timestamp: new Date(),
      content: "Added shell nix"
    }
  },
  {
    name: "COPYING",
    commit: {
      hash: "2323223233",
      timestamp: new Date(),
      content: "added GPLv3"
    }
  }
])

export function fetchDir(repo: string, branch: string, path: string) {
  return new Promise<{ data: Dir[] }>((resolve) =>
    setTimeout(() => resolve({ data: mockDirs() }), mockDelay)
  );
}