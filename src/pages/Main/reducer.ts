import { IMainReducer } from "src/types";
import actions from "./constants";

const initialState: IMainReducer = {
  newList: {
    name: "",
    display: false
  }
};

// TODO: to add action types
export default function mainReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.CHANGE_NEW_LIST_NAME:
      return {
        ...state,
        newList: {
          ...state.newList,
          name: action.name
        }
      };
    case actions.OPEN_NEW_LIST_FORM:
      return {
        ...state,
        newList: {
          ...state.newList,
          display: true
        }
      };
    case actions.RESET_NEW_LIST_FORM:
      return {
        ...state,
        newList: initialState.newList
      };
    default:
      return state;
  }
}
