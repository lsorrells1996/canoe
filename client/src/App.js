import React, { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Log from "./Components/Log";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Planning from "./Components/Planning";
import Signup from "./Components/Signup";

function App() {

  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/me').then(r => {
        if (r.ok) {
            r.json().then(user => setUser(user))
        }
    })
  }, [])

  return (
    <>
      { user ? 
      (<>
      <NavBar setUser={ setUser } />  
        <Routes>
          <Route path="/" element={ <Login setUser={ setUser } /> } />
          <Route path="/signup" element={ <Signup setUser={ setUser } /> } />
          <Route path="/home" element={ <Home setUser={ setUser } /> } />
          <Route path="/log" element={ <Log /> } />
          <Route path="/planning" element={ <Planning /> } />
        </Routes>
      </>
      ):(
      <Routes>
        <Route path="/" element={ <Login setUser={ setUser } /> } />
        <Route path="/signup" element={ <Signup setUser={ setUser } /> } />
      </Routes>
      )}
    </>
  );
}

export default App;
