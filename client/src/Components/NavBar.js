import React from 'react'
import { useNavigate } from "react-router-dom"

function NavBar({ setUser }) {

    const navigate = useNavigate()

    const onLogout = () => {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null)
            navigate('/')
          }
        })
      } 

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Canoe</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        <a className="nav-link" href="/log">Log</a>
                        <a className="nav-link" href="/planning">Plan</a>
                        <a className="nav-link" href="/planning">About</a>
                    </div>
                </div>
                <div>
                    <button className="btn btn-outline-success" onClick={ onLogout }>Logout</button>
                </div>
            </div>
        </nav>
    )
    }

export default NavBar