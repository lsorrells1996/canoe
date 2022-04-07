import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function Home({ setUser }) {

    const navigate = useNavigate()

    useEffect(() => {
        fetch('/me').then(r => {
            if (r.ok) {
                r.json().then(user => setUser(user))
            } else {
                if (r.status === 401) {
                    navigate('/')
                }
            }
        })
    }, [])

    const onLogout = () => {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null)
          navigate('/')
        }
      })
    } 

    return (
    <div>You are logged in!
         <button onClick={ onLogout }>logout</button>
    </div>
       
    )
    }

export default Home