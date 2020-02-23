import React, { Component } from "react";
import "./App.css";

import Controls from "./components/Controls";
import Board from "./components/Board";

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { name: "task 0", stage: 0 },
        { name: "task 1", stage: 0 },
        { name: "task 2", stage: 0 },
        { name: "task 3", stage: 0 },
        { name: "task 4", stage: 1 },
        { name: "task 5", stage: 1 },
        { name: "task 6", stage: 1 },
        { name: "task 7", stage: 2 },
        { name: "task 8", stage: 2 },
        { name: "task 9", stage: 3 }
      ],
      selectedTaskName: ""
    };
    this.stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];
  }

  getTaskId = e => {
    const { tasks } = this.state;
    const name = e.target.getAttribute("name");
    const selectedTaskIndex = tasks.findIndex(x => x.name === name);
    const selectedTaskStage = tasks[selectedTaskIndex].stage;
    this.setState({
      selectedTaskName: name,
      selectedTaskIndex,
      selectedTaskStage
    });
  };

  moveBack = () => {
    const { selectedTaskIndex, selectedTaskStage } = this.state;

    this.setState(prevState => ({
      ...prevState.tasks,
      [prevState.tasks[selectedTaskIndex].stage]: selectedTaskStage - 1
    }));
  };

  moveForward = () => {
    const { selectedTaskStage } = this.state;
    console.log(selectedTaskStage);
  };

  render() {
    const { tasks, selectedTaskName } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls
          selectedTaskName={selectedTaskName}
          moveBack={this.moveBack}
          moveForward={this.moveForward}
        />
        <Board
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          getTaskId={this.getTaskId}
        />
      </div>
    );
  }
}

export default App;
