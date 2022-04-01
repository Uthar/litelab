import React from 'react'
import * as Icons from 'react-feather'
import { Link, useParams } from 'react-router-dom';

const iconSize = 17;

export function Nav() {

    const { repo = "", owner = "" } = useParams()

    return (
        <nav className="nav">
            <ul className="nav-items">
                <Link to={`/${owner}/${repo}/fooz`}>
                    <li className="nav-item">
                        <img src="https://galkowski.xyz/openjdk.jpg" />
                        <span>Project name</span>
                    </li>
                </Link>
                <Link to={`/${owner}/${repo}/timeline`}>
                    <li className="nav-item">
                        <Icons.GitBranch size={iconSize} />
                        <span>Timeline</span>
                    </li>
                </Link>
                <Link to={`/${owner}/${repo}/dir`}>
                    <li className="nav-item">
                        <Icons.Code size={iconSize} />
                        <span>Code</span>
                    </li>
                </Link>
                <Link to={`/${owner}/${repo}/issues`}>
                    <li className="nav-item">
                        <Icons.AlertCircle size={iconSize} />
                        <span>Issues</span>
                    </li>
                </Link>
                <Link to={`/${owner}/${repo}/pulls`}>
                    <li className="nav-item">
                        <Icons.GitPullRequest size={iconSize} />
                        <span>Pull requests</span>
                    </li>
                </Link>
                <Link to={`/${owner}/${repo}/cicd`}>
                    <li className="nav-item">
                        <Icons.Repeat size={iconSize} />
                        <span>CI/CD</span>
                    </li>
                </Link>
                <Link to={`/${owner}/${repo}/deployments`}>
                    <li className="nav-item">
                        <Icons.UploadCloud size={iconSize} />
                        <span>Deployments</span>
                    </li>
                </Link>
                <Link to={`/${owner}/${repo}/packages`}>
                    <li className="nav-item">
                        <Icons.Package size={iconSize} />
                        <span>Packages &amp; Registries</span>
                    </li>
                </Link>
                <Link to={`/${owner}/${repo}/wiki`}>
                    <li className="nav-item">
                        <Icons.BookOpen size={iconSize} />
                        <span>Wiki</span>
                    </li>
                </Link>
                <Link to={`/${owner}/${repo}/settings`}>
                    <li className="nav-item">
                        <Icons.Settings size={iconSize} />
                        <span>Settings</span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}
