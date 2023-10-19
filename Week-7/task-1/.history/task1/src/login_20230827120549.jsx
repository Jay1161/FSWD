import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  state = {
    username: "jay",
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

    // Do some login logic here, such as making an API call to check the username and password.

    if (this.state.error === "") {
      this.setState({
        error: "Login successful!",
      });
    }
  };

  render() {
    return (
      <div class="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
      </div>
    );
  }
}

export default Login;
