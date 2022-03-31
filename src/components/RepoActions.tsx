import React from 'react'

export function RepoActions() {
    return (
        <div className="repo-actions">
            <div className='repo-actions-left flexy'>
                <select className="branch-chooser">
                    <option>trunk</option>
                    <option>develop</option>
                </select>
                <div className="repo-path">
                    project/src/module
                </div>
            </div>
            <div className="repo-buttons">
                <button>History</button>
                <button>Find file</button>
                <button>Tarball</button>
                <button>Clone</button>
            </div>
        </div>
    )
}