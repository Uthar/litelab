import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Breadcrumbs } from './Breadcrumbs'
import { useAppSelector } from './hooks/redux'
import { LangsBar } from './LangsBar'
import { LastCommit } from './LastCommit'
import { Readme } from './Readme'
import * as dirs from './redux/dirSlice'
import * as project from './redux/projectSlice'
import { RepoActions } from './RepoActions'
import { RepoFiles } from './RepoFiles'
import { RepoMetadata } from './RepoMetadata'
import { RepoShortcuts } from './RepoShortcuts'

export function ProjectPage () {

    const dispatch = useDispatch();
    const { repo, dir } = useParams();

    useEffect(() => {
        if (repo)
            dispatch(project.get(repo))
    }, [repo])

    useEffect(() => {
        if (project && repo) {
            dispatch(dirs.get([repo, dir ?? "/"]))
        }
    }, [repo, dir])


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