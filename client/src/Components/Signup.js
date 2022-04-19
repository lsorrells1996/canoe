import React, { useState } from "react";
import logo from "../img/canoe_logo.png";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const onSignup = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/home");
      } else {
        if (r.status === 422) {
          r.json().then((json) => setErrors(json.errors));
        }
      }
    });
  };

  return (
    <div className="modal-signup-background">
      <div className="modal-signup-container">
        <div className="picture-signup-container">
          <h1>Canoe</h1>
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={onSignup}>
          <div className="input-signup-container">
            <div className="input-signup">
              <label /> Username:
              <input
                type="text"
                placeholder="Username..."
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-signup">
              <label /> Email:
              <input
                type="text"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-signup">
              <label /> Password:
              <input
                type="password"
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-signup">
              <label /> Confirm Password:
              <input
                type="password"
                placeholder="Confirm Password..."
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="signup-button">Create Account</button>
        </form>
      </div>
    </div>

    // <div className="container" align="center">
    //   <div className="row">
    //     <div className="col">
    //       <h1>Create an account</h1>
    //     </div>
    //     {errors ? <p>{`${errors}`}</p> : null}
    //   </div>
    //   <div className="row">
    // <form typ="submit" onSubmit={onSignup}>
    //   <div className="col">
    //     <label /> <div>Username:</div>
    //     <input
    //       type="text"
    //       placeholder="Username..."
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <label /> <div>Email:</div>
    //     <input
    //       type="text"
    //       placeholder="Email..."
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <label /> <div>Password:</div>
    //     <input
    //       type="password"
    //       placeholder="Password..."
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <label /> <div>Confirm Password:</div>
    //     <input
    //       type="password"
    //       placeholder="Confirm Password..."
    //       onChange={(e) => setPasswordConfirmation(e.target.value)}
    //     />
    //   </div>
    //   <div className="col">
    //     <button className="btn-primary" type="submit">
    //       Create Account
    //     </button>
    //   </div>
    // </form>
    //   </div>
    // </div>
  );
}

export default Signup;
