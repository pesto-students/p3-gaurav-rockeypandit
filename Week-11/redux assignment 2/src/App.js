import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { resetStepsCounterAction } from "./action/resetStepsCounterAction";
import { increaseStepCounterAction } from "./action/increaseStepCounterAction";

class Room extends React.Component {
  increaseSteps = () => {
    this.props.increaseStepCounterAction();
  };
  resetSteps = () => {
    this.props.resetStepsCounterAction();
  };

  render() {
    return (
      <div
        style={{
          alignSelf: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div style={{ marginTop: "20px" }}>
          {" "}
          You've walked {this.props.step} steps today!
        </div>
        <button
          onClick={this.increaseSteps}
          style={{ backgroundColor: "#663797", color: "#ffffff" }}
        >
          Add a Step
        </button>

        <button
          onClick={this.resetSteps}
          style={{ backgroundColor: "#DEDEDE" }}
        >
          Reset Steps
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = (dispatch) => ({
  increaseStepCounterAction: () => dispatch(increaseStepCounterAction),
  resetStepsCounterAction: () => dispatch(resetStepsCounterAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
