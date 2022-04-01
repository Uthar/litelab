import _, { partial, repeat, shuffle, times } from "lodash";
import { Commit, Dir, Repo, User } from "../vcs/vcs";


const mockDelay: number = 100;
const mockUser: User = {
  name: "kpg",
  email: "kpg@karweusz.pl",
  image: "https://galkowski.xyz/openjdk.jpg"
}

////// Repo

const mockRepo = (name: string): Repo => {
  return {
    name,
    author: mockUser,
    content: "My super project",
    thread: [],
    tags: [],
    timestamp: "1970-01-01T00:00:01",
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
      timestamp: "1970-01-01T00:00:01",
      content: "Changed a thing"
    }
  },
  {
    name: "shell.nix",
    commit: {
      hash: "11231237019283123",
      timestamp: "1970-01-01T00:00:01",
      content: "Added shell nix"
    }
  },
  {
    name: "COPYING",
    commit: {
      hash: "2323223233",
      timestamp: "1970-01-01T00:00:01",
      content: "added GPLv3"
    }
  }
])

export function fetchDir(repo: string, branch: string, path: string) {
  return new Promise<{ data: Dir[] }>((resolve) =>
    setTimeout(() => resolve({ data: mockDirs() }), mockDelay)
  );
}

////// Commits
const mockCommit = (branch: string): Commit => ({
  author: mockUser,
  content: "Some random change",
  timestamp: "1970-01-01T00:00:01",
  thread: [],
  tags: [],
  branch: { name: branch },
  hash: shuffle("1234567890abcdef223344556677").join("")
})


export function fetchCommits(repo: string, branch: string, dir: string, page: number = 1, pageSize: number = 20, ) {
  return new Promise<{ data: Commit[] }>((resolve) =>
    setTimeout(() => resolve({ data: times(pageSize, partial(mockCommit, branch)) }), mockDelay)
  );
}