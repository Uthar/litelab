import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Breadcrumb, Breadcrumbs, last } from '../components/Breadcrumbs'
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
import { Nav } from '../Nav'


export const crumbsFor = (path: string): Breadcrumb[] => {
    return path.split('/').reduce((crumbs: Breadcrumb[], component: string) => {
      return [...crumbs, { text: component, href: `${last(crumbs)?.href || ""}${component}/` }]
    }, [])
}

export function DirPage () {

    const dispatch = useDispatch();
    const { owner = "", repo = "", branch = "trunk" } = useParams();
    const location = useLocation();
    const path = location.pathname
    const dirPath = path.split("/").slice(5).join("/")
    const page = path.split("/")[3] ?? ""

    useEffect(() => {
        dispatch(project.get(repo))
    }, [owner, repo])

    useEffect(() => {
        dispatch(dirs.get([`${owner}/${repo}`, branch ?? "trunk", dirPath ?? "/"]))
        dispatch(commits.get([owner, repo, path, 1, 15]))
    }, [owner, repo, branch])

    const projectCrumbs = crumbsFor(path)
    console.log("Path", path)
    console.log("Path", path)
    console.table(projectCrumbs)
    
    return (
        <>
            <Nav />
            <main id="site">
                <Breadcrumbs
                    separator='>'
                    elements={projectCrumbs}
                />
                <RepoMetadata />
                <LangsBar />

                <RepoActions />
                <LastCommit />
                <RepoShortcuts />
                <RepoFiles />
                <Readme />
            </main>
        </>
    )
}