import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from './hooks/redux';
import { get, selectProject } from './redux/projectSlice';

export function Breadcrumbs() {

    let {project, status} = useAppSelector((state) => state.project);
    let dispatch = useDispatch();

    useEffect(() => {
        console.log("boom")
        dispatch(get("bazzie"))
    }, [])

    return (
        <div className="breadcrumbs">
            Owner &gt; {status == "loading" ? "Loading..." : project}
        </div>
    )
}