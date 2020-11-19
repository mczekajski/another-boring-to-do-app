import React from "react";

const Task = (props) => {
  const important = {
    color: "red",
  };

  const { text, date, id, active } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong>{text}</strong> do <span>{date} </span>
          <button onClick={() => props.change(id)}>Zostało zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    return null
  }
};

export default Task;
