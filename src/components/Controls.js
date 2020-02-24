import React, { Component } from "react";

class Controls extends Component {
  render() {
    const { selectedTaskName, selectedTaskStage, itemsMover } = this.props;
    return (
      <div style={{ padding: "1rem", background: "#D6F3FF" }}>
        <h1>Controls</h1>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: "1rem" }}
            data-testid="selected-task-field"
            value={selectedTaskName}
          />
          <button
            onClick={() => itemsMover("back")}
            style={{ marginLeft: "1rem" }}
            disabled={!selectedTaskName || selectedTaskStage === 0}
            data-testid="move-back-btn"
          >
            Move back
          </button>
          <button
            onClick={() => itemsMover("forward")}
            style={{ marginLeft: "1rem" }}
            disabled={!selectedTaskName || selectedTaskStage === 3}
            data-testid="move-forward-btn"
          >
            Move forward
          </button>
        </div>
      </div>
    );
  }
}

export default Controls;
