import React from 'react'

export type LastCommitProps = {
    image: string;
    comment: string;
    user: string;
    timestamp: string;
    hash: string;
}

export function LastCommit(props: LastCommitProps) {
    return (
        <div className="last-commit">
            <div className="committer">
                <img src={props.image}></img>
                <div className="commit">
                    <strong>{props.comment}</strong>
                    <span>{props.user} ({props.timestamp})</span>
                </div>
            </div>
            <button>{props.hash}</button>
        </div>
    )
}