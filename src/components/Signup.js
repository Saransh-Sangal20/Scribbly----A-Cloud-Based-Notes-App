import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();  // prevent page from reloading on form submit
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
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
    setcredentials({ name: "", email: "", password: "", cpassword: "" }); // Clear the form after submission
  }

  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <div className="container">
      <form onSubmit={handleSignup}>
        <div className="mb-3 my-3">
          <h2>Welcome To Scribbly!</h2>
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={handleChange} aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} required minLength={5} />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={handleChange} required minLength={5} />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  )
}
