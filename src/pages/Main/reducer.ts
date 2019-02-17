import { IMain } from "src/types";
import actions from "./constants";

const initialState: IMain = {
  lists: [],
  pending: false,
  newList: {
    name: "",
    pending: false,
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
    case actions.CREATE_LIST_REQUEST:
      return {
        ...state,
        newList: {
          ...state.newList,
          pending: true
        }
      };
    case actions.CREATE_LIST_SUCCESS:
      return {
        ...state,
        lists: [...state.lists, action.list],
        newList: initialState.newList
      };
    case actions.DELETE_LIST_REQUEST:
      return state;
    case actions.DELETE_LIST_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.id)
      };
    default:
      return state;
  }
}
