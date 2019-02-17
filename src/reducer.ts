import { combineReducers } from "redux";
import main from "./pages/Main/reducer";
import view from "./pages/View/reducer";

export default combineReducers({
  main,
  view
});
