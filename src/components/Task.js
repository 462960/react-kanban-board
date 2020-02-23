import React from "react";

const taskNameToId = name => {
  return `task-${name}`;
};

const Task = ({ name, getTaskId }) => {
  return (
    <div
      onClick={getTaskId}
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        margin: "1rem 1rem 0 1rem",
        cursor: "pointer"
      }}
      name={name}
      data-testid={taskNameToId(name)}
    >
      {name}
    </div>
  );
};

export default Task;
