import React from 'react'
import * as Icons from 'react-feather'
import { Link } from 'react-router-dom';

const iconSize = 17;

export function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-items">
                <Link to="/fooz">
                    <li className="nav-item">
                        <img src="https://galkowski.xyz/openjdk.jpg" />
                        <span>Project name</span>
                    </li>
                </Link>
                <Link to="timeline">
                    <li className="nav-item">
                        <Icons.GitBranch size={iconSize} />
                        <span>Timeline</span>
                    </li>
                </Link>
                <Link to="code">
                    <li className="nav-item">
                        <Icons.Code size={iconSize} />
                        <span>Code</span>
                    </li>
                </Link>
                <Link to="issues">
                    <li className="nav-item">
                        <Icons.AlertCircle size={iconSize} />
                        <span>Issues</span>
                    </li>
                </Link>
                <Link to="merge_requests">
                    <li className="nav-item">
                        <Icons.GitPullRequest size={iconSize} />
                        <span>Merge requests</span>
                    </li>
                </Link>
                <Link to="cicd">
                    <li className="nav-item">
                        <Icons.Repeat size={iconSize} />
                        <span>CI/CD</span>
                    </li>
                </Link>
                <Link to="deployments">
                    <li className="nav-item">
                        <Icons.UploadCloud size={iconSize} />
                        <span>Deployments</span>
                    </li>
                </Link>
                <Link to="packages">
                    <li className="nav-item">
                        <Icons.Package size={iconSize} />
                        <span>Packages &amp; Registries</span>
                    </li>
                </Link>
                <Link to="wiki">
                    <li className="nav-item">
                        <Icons.BookOpen size={iconSize} />
                        <span>Wiki</span>
                    </li>
                </Link>
                <Link to="settings">
                    <li className="nav-item">
                        <Icons.Settings size={iconSize} />
                        <span>Settings</span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}
