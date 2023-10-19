// src/App.js
import React, { Component } from 'react';
import axios from 'axios';
import ''

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTaskDescription: '',
    };
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios
      .get('http://localhost:3000/tasks')
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({ newTaskDescription: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      description: this.state.newTaskDescription,
      completed: false,
    };

    axios
      .post('http://localhost:3000/tasks/add', newTask)
      .then((res) => {
        console.log(res.data);
        this.setState({ newTaskDescription: '' });
        this.getTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label>New Task: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.newTaskDescription}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Task" className="btn btn-primary" />
          </div>
        </form>
        <div>
          <ul>
            {this.state.tasks.map((task) => (
              <li key={task._id}>
                {task.description}
                {task.completed ? ' (completed)' : ''}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
