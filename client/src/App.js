import React, { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./Components/About";
import AdventureViewer from "./Components/AdventureViewer";
import Home from "./Components/Home";
import Log from "./Components/Log";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import PlannedAdventureViewer from "./Components/PlannedAdventureViewer";
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
          <Route path="/log" element={ <Log user={ user } /> } />
          <Route path="/planning" element={ <Planning user={ user } /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/:adventure_title/:id" element={ <AdventureViewer /> } />
          <Route path="p/:adventure_title/:id" element={ <PlannedAdventureViewer /> } />
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
