export default (state, action) => {
  console.log("Reducer", state, action);
  switch (action.type) {
    case "switchOn":
      console.log("Coming inside");
      return {
        switch: action.payload
      };
    case "switchOff":
      console.log("Coming inside");

      return {
        switch: action.payload
      };
    default:
      console.log("Coming inside");

      return state;
  }
};
