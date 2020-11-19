import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Zagrać wreszcie w Wiedźmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Zrobić dobry uczynek",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Pomalować dom po sylwestrze",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Schudnąć 30 kilogramów",
        date: "2019-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Sprzedać butelki po piwie (20 skrzynek)",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "Jeszcze raz pomalować dom",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "Fryzjer!!!",
        date: "2019-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 7,
        text: "Nie odbierać poleconego od komornika",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 8,
        text: "Kupić 2 butelki litrowe",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("change elementu o id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    });
    this.setState({
      tasks
    })
  };

  render() {
    return (
      <div className="App">
        TODO APP
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
