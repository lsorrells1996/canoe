import React from "react";
import "./Header.css"
import logo from "../img/canoe_logo.png"
import { useNavigate, Link } from "react-router-dom";

function Header({ setUser, user, handleLoginClick }) {
  const navigate = useNavigate();

  const onLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  };

  return (
    <>
      { user ? (
        
          <div className="header">
            <div className="logo">Canoe
            <img src={logo} alt="" />
            </div>
            <div className="menu-center">
              <ul>
                <Link className="menu-center-list" to="/home">Home</Link>
                <Link className="menu-center-list" to="/log">Log</Link>
                <Link className="menu-center-list" to="/planning">Plan</Link>
              </ul>
            </div>
            <div className="logout">
              <button onClick={onLogout} >Logout</button>
            </div>
          </div>
        
       ) : (
        <div>
          <div className="header">
          <div className="logo">Canoe
            <img src={logo} alt="" />
            </div>
            <div className="menu">
              <ul>
                <Link className="menu-list" to="/login" onClick={() => handleLoginClick()}>Login</Link>
                <Link className="menu-list" to="/signup">Sign Up</Link>
              </ul>
            </div>
          </div>
        </div>
       )}
    </>

    // <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <Link to="/home" className="navbar-brand">
    //       Canoe
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav">
    //         <Link to="/home" className="nav-link">
    //           Home
    //         </Link>
    //         <Link to="/log" className="nav-link">
    //           Log
    //         </Link>
    //         <Link to="/planning" className="nav-link">
    //           Plan
    //         </Link>
    //         <Link to="/about" className="nav-link">
    //           About
    //         </Link>
    //       </div>
    //     </div>
    //     <div>
    //       <button className="btn btn-outline-success" onClick={onLogout}>
    //         Logout
    //       </button>
    //     </div>

    //   </div>
    // </nav>
  );
}

export default Header;
