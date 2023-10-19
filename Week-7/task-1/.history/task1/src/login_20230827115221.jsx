import React, { Component } from "react";
import { Form, Input, Button } from "react-bootstrap";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    if (username === "" || password === "") {
      this.setState({
        error: "Please enter your username and password.",
      });
      return;
    }

    // Do some login logic here, such as making an API call to check the username and password.

    if (this.state.error === "") {
      this.setState({
        error: "Login successful!",
      });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type="submit">Login</Button>
        {this.state.error && <p>{this.state.error}</p>}
      </Form>
    );
  }
}

export default Login;
