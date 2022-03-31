import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { useAppSelector } from '../hooks/redux'
import { LangsBar } from '../components/LangsBar'
import { LastCommit } from '../components/LastCommit'
import { Readme } from '../components/Readme'
import * as dirs from '../redux/dirSlice'
import * as project from '../redux/projectSlice'
import * as commits from '../redux/commitsSlice'
import { RepoActions } from '../components/RepoActions'
import { RepoFiles } from '../components/RepoFiles'
import { RepoMetadata } from '../components/RepoMetadata'
import { RepoShortcuts } from '../components/RepoShortcuts'

export function DirPage () {

    const dispatch = useDispatch();
    const { owner = "", repo = "", branch } = useParams();
    const location = useLocation();
    const path = location.pathname.split("/").slice(5).join("/")

    useEffect(() => {
        dispatch(project.get(repo))
    }, [owner, repo])

    useEffect(() => {
        dispatch(dirs.get([`${owner}/${repo}`, branch ?? "trunk", path ?? "/"]))
        dispatch(commits.get([owner, repo, path, 1, 15]))
    }, [owner, repo, branch])


    return (
        <main id="site">
            <Breadcrumbs/>
            <RepoMetadata/>
            <LangsBar/>
            
            <RepoActions/>
            <LastCommit />
            <RepoShortcuts/>
            <RepoFiles/>
            <Readme/>
        </main>
    )
}