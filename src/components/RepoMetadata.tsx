import React from 'react'

export function RepoMetadata() {
    return (
        <div className="repo-meta">
            <div className="repo-meta-title">
                <div className="project-name">Project Name</div>
                <div className="stars">Stars</div>
            </div>
            <div className="repo-meta-stats">Commits Branches Tags Files</div>
            <div className="repo-meta-description">My amazing project</div>
        </div>
    )
}