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
import { RepoActions } from '../components/RepoActions'
import { RepoFiles } from '../components/RepoFiles'
import { RepoMetadata } from '../components/RepoMetadata'
import { RepoShortcuts } from '../components/RepoShortcuts'

export function DirPage () {

    const dispatch = useDispatch();
    const { owner, repo, branch } = useParams();
    const path = useLocation();

    useEffect(() => {
        if (repo)
            dispatch(project.get(repo))
    }, [repo])

    useEffect(() => {
        if (project && repo) {
            dispatch(dirs.get([repo, branch ?? "trunk", path.pathname ?? "/"]))
        }
    }, [repo])


    return (
        <main id="site">
            <Breadcrumbs/>
            <RepoMetadata/>
            <LangsBar/>
            
            <RepoActions/>
            <LastCommit
              image="https://galkowski.xyz/openjdk.jpg"
              comment='Added a foo and a bar'
              user="kpg"
              timestamp='4 years'
              hash="f8ae8bc01"
            />
            <RepoShortcuts/>
            <RepoFiles/>
            <Readme/>
        </main>
    )
}