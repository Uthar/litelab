import React, { useState } from 'react'

export function SearchBar() {
    const [value, setValue] = useState("")
    return (
        <input placeholder="Search FossilLab" type="text" id="search"/>
    )
}
