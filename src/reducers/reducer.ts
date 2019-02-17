import { combineReducers } from "redux";
import main from "src/pages/Main/reducer";
import view from "src/pages/View/reducer";
import lists from "./lists";

export default combineReducers({
  main,
  view,
  lists
});
