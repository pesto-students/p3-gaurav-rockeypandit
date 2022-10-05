import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { switchOffAction } from "./action/switchOffAction";
import { switchOnAction } from "./action/switchOnAction";

class Room extends React.Component {
  // state = {
  //   isLightOn: this.props.switch
  // };

  flipLight = () => {
    if (this.props.switch) {
      this.props.switchOffAction();
    } else {
      this.props.switchOnAction();
    }
  };

  render() {
    const lightedness = this.props.switch ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = (dispatch) => ({
  switchOnAction: () => dispatch(switchOnAction),
  switchOffAction: () => dispatch(switchOffAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
