import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

function Home({ setUser }) {
    
    const [adventures, setAdventures] = useState([])
    const [plannedAdventures, setPlannedAdventures] = useState([])
    const navigate = useNavigate()

    useEffect( () => {
        let myfetches = []

        myfetches.push(fetch('/adventures').then(r => {
            if (r.ok) {
                r.json().then(data => setAdventures(data))
            }
        }))
        myfetches.push(fetch('/planned_adventures').then(r => {
            if (r.ok) {
                r.json().then(data => setPlannedAdventures(data))
            }
        }))

        Promise.all(myfetches)
    }, [] )    

    console.log(adventures)

    return (
        <>
            <div className='container'>
                <div className='row'>
                {plannedAdventures ? <div className='col' align='left'>
                        Planned Adventures
                        {plannedAdventures.map(a => {
                            return <p>{`This is my ${a.title} adventure!`}</p>
                        })}
                    </div> : null}
                    {adventures ? <div className='col' align='right'>
                        Adventure Log
                        {adventures.map(a => {
                            return <p>{`This is my ${a.title} adventure!`}</p>
                        })}
                    </div> : null}
                </div>
            </div>
        </>   
    )
}

export default Home