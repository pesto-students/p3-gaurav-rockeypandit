export default (state, action) => {
  switch (action.type) {
    case "increaseStepCounter":
      return {
        step: state.step + action.payload
      };
    case "resetStepsCounter":
      return {
        step: action.payload
      };
    default:
      return state;
  }
};
