import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

export function Breadcrumbs() {

    let {project, status} = useAppSelector((state) => state.project);

    if (project == null) {
        return <div>Loading...</div>
    }

    const name = status == "loading" ? "Loading..." : project.name;
    const owner = status == "loading" ? "Loading..." : project.author.name;

    return (
        <div className="breadcrumbs">
            {owner} &gt; {name}
        </div>
    )
}