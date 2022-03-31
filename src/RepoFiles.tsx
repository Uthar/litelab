import moment from 'moment';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppSelector } from './hooks/redux';
import { get } from './redux/dirSlice';
import { fetchDir } from './rest/litelabAPI';
import * as _ from 'lodash'

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

    const dispatch = useDispatch()
    const { dirs, status } = useAppSelector((state) => state.dir)
    const { project } = useAppSelector((state) => state.project)
    const { dir } = useParams()

    useEffect(() => {
        console.log(dir)
        if (project) {
            dispatch(get([project.name, dir ?? "/"]))
        }
    }, [project, dir])

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
            return dirs.map(({ name, commit }) => (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{commit.content}</td>
                    <td className="last-update">{
                        moment(commit.timestamp.toISOString()).fromNow()
                    }</td>
                </tr>
            ))
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