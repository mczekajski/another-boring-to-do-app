import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  //const tasks = props.tasks.map((task) => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);

  return (
    <>
      <div className="active">
        <h2>
          Zadania do zrobienia <em>({active.length})</em>
        </h2>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do zrobienia.</p>}
      </div>
      <div className="done">
        <h3>
          Zadania zrobione <em>({done.length})</em>
        </h3>
        {done.length > 5 && (
          <span style={{ fontSize: 12 }}>
            Wyświetlonych jest jedynie 5 ostatnich zadań: 
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
