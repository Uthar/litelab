import moment from 'moment';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

export function LastCommit() {

    const { owner, repo } = useParams()
    const { commits } = useAppSelector(state => state.commits)

    const lastCommit = commits[0]

    if (!lastCommit) {
        return (
            <div>No commits</div>
        )
    }

    const user = lastCommit.author
    const hash = lastCommit.hash

    console.table(hash)

    return (
        <div className="last-commit">
            <div className="committer">
                <Link to={`/${user.name}`}><img src={user.image.toString()}></img></Link>
                <div className="commit">
                    <Link to={`/${owner}/${repo}/commit/${lastCommit.hash}`}>
                        <strong>{lastCommit.content}</strong>
                    </Link>
                    <div>
                        <Link to={`/${user.name}`}>{user.name}</Link> 
                        <span title={lastCommit.timestamp}>({moment(lastCommit.timestamp).fromNow()})</span>
                    </div>
                </div>
            </div>
            <button>{lastCommit.hash}</button>
        </div>
    )
}