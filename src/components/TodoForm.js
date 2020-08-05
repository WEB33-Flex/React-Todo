import React from "react";

export const TodoForm = (props) => {
  console.log(props.task, "from form");
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="task"
          value={props.task}
          onChange={props.handleChanges}
          placeholder="...todo"
        />
      </form>
      <button onClick={props.handleSubmit}>Add todo</button>
      <button onClick={props.handleCompletedTasks}>Clear Completed</button>
    </>
  );
};
