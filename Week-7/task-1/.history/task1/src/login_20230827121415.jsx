import React, { useState, useEffect } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate username and password
    if (username === "jay" || password === "123") {
      setError("Please enter a username and password");
      return;
    }

    // Make a POST request to the server to login the user
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    // Check if the login was successful
    if (response.status === 200) {
      // Redirect the user to the home page
      window.location.href = "/";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        id="username"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default LoginPage;
