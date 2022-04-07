import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Signup from "./Components/Signup";

function App() {

  const [user, setUser] = useState(null);

  return (
    <>
      <NavBar setUser={ setUser } />
      <Routes>
        <Route path="/" element={ <Login setUser={ setUser } /> } />
        <Route path="/signup" element={ <Signup setUser={ setUser } /> } />
        <Route path="/home" element={ <Home setUser={ setUser } /> } />
      </Routes>
    </>
  );
  }

export default App;
