import moment from 'moment';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { get } from '../redux/dirSlice';
import { fetchDir } from '../rest/litelabAPI';
import * as _ from 'lodash'
import { butlast } from './Breadcrumbs';

const range = (from: number, to: number): number[] => {
    let lp = (acc: number[], n: number): number[] => n >= to ? acc : lp([...acc, n], n+1)
    return lp([from], from+1)
}

export function RepoFiles() {

    const { dirs, status } = useAppSelector((state) => state.dir)
    const { owner = "", repo = "", branch = "trunk" } = useParams()
    const location = useLocation()
    const path = location.pathname.split("/").slice(5).join("/")
    let dirname = butlast(path.split("/")).join("/")
    if (dirname !== "") {
      dirname += "/"
    }
    const navigate = useNavigate()

    const table = (() => {
        if (status == "loading") {
            return range(1, 5).map(n =>
                <tr key={`file-${n}`}>
                    <td>...</td>
                    <td>...</td>
                    <td className="last-update">...</td>
                </tr>
            )
        } else {
            return dirs.map(({ name, commit }) => {
                const timestamp = commit.timestamp;
                return (
                    <tr key={name}>
                        <td
                            className="file-name"
                            title={name}
                        >
                            <Link to={`/${owner}/${repo}/dir/${branch}/${dirname}${name}`}>
                                {name}
                            </Link>

                        </td>
                        <td className="commit-hash">
                            <Link
                                title={commit.content}
                                to={`/${owner}/${repo}/commit/${commit.hash}`}
                            >
                                {commit.content}
                            </Link>
                        </td>
                        <td className="last-update">
                            <span title={timestamp}>
                                {moment(timestamp).fromNow()}
                            </span>
                        </td>
                    </tr>
                )
            })
        }
    })()

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
                    {table}
                </tbody>
            </table>
        </div>
    )
}
