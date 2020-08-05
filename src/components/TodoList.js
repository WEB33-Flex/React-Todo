import React from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export const TodoList = (props) => {
  return (
    <>
      <div className="todo-list">
        {props.tasks.map((task, index) => (
          <Todo key={index} task={task} toggleTask={props.toggleTask} />
        ))}
      </div>
      <div className="todo-form">
        <TodoForm
          task={props.task}
          addTask={props.addTask}
          handleChanges={props.handleChanges}
          handleSubmit={props.handleSubmit}
          handleCompletedTasks={props.handleCompletedTasks}
        />
      </div>
    </>
  );
};
