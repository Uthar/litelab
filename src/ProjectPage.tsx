import React from 'react'
import { Breadcrumbs } from './Breadcrumbs'
import { useAppSelector } from './hooks/redux'
import { LangsBar } from './LangsBar'
import { LastCommit } from './LastCommit'
import { Readme } from './Readme'
import { selectProject } from './redux/projectSlice'
import { RepoActions } from './RepoActions'
import { RepoFiles } from './RepoFiles'
import { RepoMetadata } from './RepoMetadata'
import { RepoShortcuts } from './RepoShortcuts'

export function ProjectPage () {


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