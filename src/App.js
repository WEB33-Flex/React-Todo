import React from "react";
import { TodoList } from "./components/TodoList";

import "./components/Todo.css";

const tasks = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      task: "",
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  removeTask = () => {
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed),
    });
  };

  toggleTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  handleChanges = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addTask(this.state.task);
    this.setState({
      task: "",
    });
  };

  handleCompletedTasks = (e) => {
    e.preventDefault();
    this.removeTask();
  };

  render() {
    return (
      <>
        <div>
          <h1>Todo List:</h1>
        </div>
        <TodoList
          tasks={this.state.tasks}
          task={this.state.task}
          addTask={this.addTask}
          toggleTask={this.toggleTask}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
          handleCompletedTasks={this.handleCompletedTasks}
        />
      </>
    );
  }
}

export default App;
