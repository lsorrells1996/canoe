import React, { useState } from "react";
import "./Login.css"; 
import logo from "../img/canoe_logo.png"
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/home");
      } else {
        if (r.status === 401) {
          r.json().then((json) => setErrors(json.error));
        }
      }
    });
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="picture-container">
          <h1>Canoe</h1>
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={onLogin}>
          <div className="input-container">
            <div className="input">
              <label /> Username
              <input
                type="text"
                placeholder="Username..."
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input">
              <label />
              Password
              <input
                type="password"
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="login-container">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <div className="signup">
          <div>
            <p>Don't have an account?</p>
          </div>
          <div>
            <Link to='/signup' className=''>Signup!</Link>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
