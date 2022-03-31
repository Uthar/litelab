
export type Post = {
    author: User;
    content: string;
    timestamp: Date;
    thread: Post[];
    tags: Tag[]
}

export type Repo = Post & {
    name: string;
    stargazers: User[];
    branches: Branch[];
    forkedFrom: Repo | null;
}

export type Branch = {
    name: string;
}

export type User = {
    name: string;
    email: string;
    image: URL;
}


export type Commit = Post & {
    hash: string;
    branch: Branch;
}

export type Tag = {
    name: string;
}

export type Issue = Post & {
    title: string;
    timestamp: Date;
    status: IssueStatus;
    assignee: User;
}

export type IssueStatus = "Open" | "Closed"

export type MR = Post & {
    from: [Repo,  Branch];
    to: [Repo, Branch];
}

export type Dir = {
    name: string,
    commit: Pick<Commit, "hash" | "timestamp" | "content">
}