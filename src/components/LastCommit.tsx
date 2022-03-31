import React from 'react'
import { useParams } from 'react-router-dom';
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

    return (
        <div className="last-commit">
            <div className="committer">
                <img src={user.image.toString()}></img>
                <div className="commit">
                    <strong>{lastCommit.content}</strong>
                    <span>{user.name} ({lastCommit.timestamp})</span>
                </div>
            </div>
            <button>{lastCommit.hash}</button>
        </div>
    )
}