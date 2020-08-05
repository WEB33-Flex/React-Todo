import React from "react";

export const Todo = (props) => {
  return (
    <ul
      onClick={() => props.toggleTask(props.task.id)}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <li>{props.task.task}</li>
    </ul>
  );
};
