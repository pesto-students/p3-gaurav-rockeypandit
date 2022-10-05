import { createStore } from "redux";
import changeStateReducer from "./reducer/changeStateReducer";
function configureStore(state = { switch: true }) {
  return createStore(changeStateReducer, state);
}
export default configureStore;
