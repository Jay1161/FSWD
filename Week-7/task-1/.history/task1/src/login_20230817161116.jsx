import React, { useState } from "react";
import { Form, Input, Button } from "react-bootstrap";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "" || password === "") {
      setError("Please enter your username and password.");
    } else {
      // Do some backend validation here...
      setError("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type="submit">Login</Button>
      {error && <p>{error}</p>}
    </Form>
  );
};

export default LoginForm;
