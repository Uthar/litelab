import React from 'react'
import { useAppSelector } from '../hooks/redux'

export function RepoMetadata() {

    const { project } = useAppSelector(state => state.project)
    const { dirs } = useAppSelector(state => state.dir)

    return (
        <div className="repo-meta">
            <div className="repo-meta-title">
                <div className="project-name">{project?.name ?? "..."}</div>
                <div className="stars">Stars: {project?.stargazers.length ?? 0}</div>
            </div>
            <div className="repo-meta-stats">
                Commits: TODO
                Branches  {project?.branches.length ?? 0}
                Tags {project?.tags.length ?? 0}
                Files {dirs.length}
            </div>
            <div className="repo-meta-description">{project?.content ?? "..."}</div>
        </div>
    )
}