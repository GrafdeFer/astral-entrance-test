import { IMain } from "src/types";
import actions from "./constants";

const initialState: IMain = {
  lists: [],
  pending: false
};

// TODO: to add action types
export default function mainReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.GET_LISTS_REQUEST:
      return {
        ...state,
        pending: true
      };
    case actions.GET_LISTS_SUCCESS:
      return {
        ...state,
        lists: action.lists
      };
    default:
      return state;
  }
}
