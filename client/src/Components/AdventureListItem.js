import React from 'react'
import { Link } from 'react-router-dom'

function AdventureListItem({ title, id }) {

    let name = title;
    name = name.replace(/\s+/g, '-');
    const url = `/${name}/${id}`

    return (
        <>      
            <div>this is my {`${title}`} adventure!</div>
            <Link to={url}> Expand! </Link>
        </>
    )
}

export default AdventureListItem