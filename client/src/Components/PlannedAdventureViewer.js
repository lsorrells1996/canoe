import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function PlannedAdventureViewer() {
    const [adventure, setAdventure] = useState('')
    let params = useParams()

    useEffect( () => {
        fetch(`/planned_adventures/${params.id}`).then(r => {
            if (r.ok) {
                r.json().then(data => setAdventure(data))
            }
        })
    }, [] )
    
    let locations = adventure.location_list
    
    return (
        <div className='container' align='center'>
            <div className='row'>
                <h1>{adventure.title}</h1>
                {locations ? locations.map(l => {
                    return <h3>{l.city}</h3>
                }) : null}
            </div>
        </div>
    )
}

export default PlannedAdventureViewer