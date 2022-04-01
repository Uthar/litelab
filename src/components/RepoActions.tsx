import _, { partial } from 'lodash'
import React from 'react'
import { useLocation, useMatch, useNavigate, useParams, useResolvedPath } from 'react-router-dom'
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
    const { owner, repo, branch = "trunk" } = useParams()
    const location = useLocation()
    const path = location.pathname.split("/").slice(5).join("/")
    const navigate = useNavigate();

    const to = (branch: string) => `/${owner}/${repo}/dir/${branch}/${path}`
    const options = project?.branches.map(b =>
        <option key={b.name}>
            {b.name}
        </option>
    )

    return (
        <div className="repo-actions">
            <div className='repo-actions-left flexy'>

                <select
                    className="branch-chooser"
                    onChange={e => navigate(to(e.currentTarget.value))}
                    defaultValue={branch}
                >
                    {options}
                </select>

                <div className="repo-path">
                    {`repo/${path}`}
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