import _, { partial } from 'lodash'
import React from 'react'
import { useLocation, useMatch, useParams, useResolvedPath } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'

export function apply(f: Function, args: any[]) {
    return f.apply(null, args)
}

export function concatStringsSep (sep: string, ...strings: string[]) {
    return strings.reduce((a, b) => a + sep + b, "")
}

export function concatStrings (...strings: string[]) {
    return apply(concatStringsSep, ["", ...strings])
}

export function RepoActions() {

    const { project } = useAppSelector(state => state.project)
    const { repo, branch } = useParams()
    const path = useLocation()

    return (
        <div className="repo-actions">
            <div className='repo-actions-left flexy'>

                <select className="branch-chooser">
                    {project?.branches.map(b => <option selected={b.name === branch}>{b.name}</option>)}
                </select>

                <div className="repo-path">
                    {`repo${apply(partial(concatStringsSep, "/"), path.pathname.split("/").slice(5))}`}
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