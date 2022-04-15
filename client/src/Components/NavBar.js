import React from "react";
import { useNavigate, Link } from "react-router-dom";

function NavBar({ setUser }) {
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
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          Canoe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/log" className="nav-link">
              Log
            </Link>
            <Link to="/planning" className="nav-link">
              Plan
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-success" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
