import { listActions } from "src/constants/index";
import { IViewReducer } from "src/types";
import { viewActions } from "./constants";

const initialState: IViewReducer = {
  newItem: {
    name: "",
    count: 1,
    price: 0
  }
};

// TODO: to add action types
export default function viewReducer(state = initialState, action: any) {
  switch (action.type) {
    case listActions.ADD_ITEM:
      return {
        newItem: initialState.newItem
      };
    case viewActions.CHANGE_ITEM_COUNT:
      return {
        ...state,
        newItem: {
          ...state.newItem,
          count: action.count
        }
      };
    case viewActions.CHANGE_ITEM_NAME:
      return {
        ...state,
        newItem: {
          ...state.newItem,
          name: action.name
        }
      };
    case viewActions.CHANGE_ITEM_PRICE:
      return {
        ...state,
        newItem: {
          ...state.newItem,
          price: action.price
        }
      };
    default:
      return state;
  }
}
