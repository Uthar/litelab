import React from 'react'

const range = (from: number, to: number): number[] => {
    let lp = (acc: number[], n: number): number[] => {
        if (n >= to) {
            return acc;
        }
        else {
            return lp([...acc, n], n + 1)
        }
    }
    return lp([from], from+1)
}

export function RepoFiles() {
    return (
        <div className="repo-files-container">
            <table className="repo-files">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last commit</th>
                        <th className="last-update">Last change</th>
                    </tr>
                </thead>
                <tbody>
                    {range(1, 10).map(x => (
                        <tr key={x}>
                            <td>README.md {x}</td>
                            <td>Add readme</td>
                            <td className="last-update">{x} days</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}