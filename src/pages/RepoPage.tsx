import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
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

export function RepoPage () {

    const dispatch = useDispatch();
    const { owner, repo } = useParams();

    useEffect(() => {
        if (owner && repo)
            dispatch(project.get(owner+'/'+repo))
    }, [owner, repo])

    useEffect(() => {
        if (owner && repo) {
            dispatch(dirs.get([owner+'/'+repo, "/"]))
        }
    }, [owner, repo])


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