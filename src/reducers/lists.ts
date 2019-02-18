import { listActions } from "src/constants/index";
import { IListsReducer } from "src/types";

const initialState: IListsReducer = {
  lists: {}
};

export default function listsReducer(state = initialState, action: any) {
  switch (action.type) {
    case listActions.ADD_LIST:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.listID]: action.list
        }
      };
    case listActions.ADD_TAG:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.listID]: {
            ...state.lists[action.listID],
            tags: [...state.lists[action.listID].tags, action.tag]
          }
        }
      };
    case listActions.REMOVE_TAG:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.listID]: {
            ...state.lists[action.listID],
            tags: state.lists[action.listID].tags.filter(
              tag => tag !== action.tag
            )
          }
        }
      };
    case listActions.ADD_ITEM:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.listID]: {
            ...state.lists[action.listID],
            items: [...state.lists[action.listID].items, action.item]
          }
        }
      };
    case listActions.REMOVE_ITEM:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.listID]: {
            ...state.lists[action.listID],
            items: state.lists[action.listID].items.filter(
              item => item.id !== action.itemID
            )
          }
        }
      };
    case listActions.TOGGLE_PURCHASE_ITEM:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.listID]: {
            ...state.lists[action.listID],
            items: state.lists[action.listID].items.map(item =>
              item.id === action.itemID
                ? { ...item, purchased: !item.purchased }
                : item
            )
          }
        }
      };
    default:
      return state;
  }
}
