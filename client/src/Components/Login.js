import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login({ setUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)
    const navigate = useNavigate()

    const onLogin = e => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(r => {
            if (r.ok) {
                r.json().then(user => setUser(user))
                navigate('/home')
            } else {
                if (r.status === 401) {
                    r.json().then(json => setErrors(json.error))
                }
            }
        })
    }

    return (
    <div className='container' align='center'>
        <div className='row'>
            <div className='col'>
                <h1> Canoe </h1>
            </div>
        </div>
        <form type='submit' onSubmit={ onLogin } >
            <div className='row'>
                <div className='col'>
                    <label/> <div>Username:</div>
                    <input type='text' placeholder='Username...' onChange={ (e) => setUsername(e.target.value) } />
                    <label/> <div>Password:</div>
                    <input type='password' placeholder='Password...' onChange={ (e) => setPassword(e.target.value) }/>
                </div>
            </div>
        <div className='col'>
            <button className='btn-primary' type='submit'>Login</button>
        </div>
        </form>
        <div className='row'>
            <p>Don't have an account?</p>
            <a href='/signup'> Signup </a>
        </div>
    </div>

    )
    }

export default Login