import { createStore } from "redux";
import changeStateReducer from "./reducer/changeStateReducer";
function configureStore(state = { step: 0 }) {
  return createStore(changeStateReducer, state);
}
export default configureStore;
