import { Dispatch } from "redux";
import { fakeCreateList } from "src/api";
import { listActions } from "src/constants/index";
import { IList } from "src/types";
import actions from "./constants";

export const createList = (name: string) => (dispatch: Dispatch) => {
  const listID = new Date().toISOString();
  const list = fakeCreateList(name);
  dispatch(createListSuccess(listID, list));
  dispatch(resetForm());
};

const createListSuccess = (listID: string, list: IList) => ({
  type: listActions.ADD_LIST,
  listID,
  list
});

export const changeName = (name: string) => ({
  type: actions.CHANGE_NEW_LIST_NAME,
  name
});

export const openForm = () => ({
  type: actions.OPEN_NEW_LIST_FORM
});

export const resetForm = () => ({
  type: actions.RESET_NEW_LIST_FORM
});
