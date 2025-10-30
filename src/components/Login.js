import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setcredentials] = useState({email: "", password: ""});
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();  // prevent page from reloading on form submit
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    })
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
    }
    else {
      alert("Invalid credentials");
    }
    setcredentials({email: "", password: ""}); // Clear the form after submission
  }
  const handleChange = (e) => {
        setcredentials({...credentials, [e.target.name]: e.target.value});
  }
  return (
    <div className='container'>
      <form onSubmit={handleLogin}>
        <div className="mb-3 my-3">
          <h2>Welcome back!</h2>
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={handleChange} aria-describedby="emailHelp" required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} required minLength={5}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}
