import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function Home({ setUser }) {

    const navigate = useNavigate()

    

    

    return (
        <>
            <div className='container'>
               <div className='row'>
                   <div className='col'>
                        left stuff
                   </div>
                   <div className='col' align='right'>
                        {/* this will be a list of the adventures */}
                       Adventure Log
                   </div>
               </div>
            </div>
        </>   
    )
}

export default Home