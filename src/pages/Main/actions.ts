import { Dispatch } from "redux";
import { fakeCreateList } from "src/api";
import { IList } from "src/types";
import actions from "./constants";

export const createList = (name: string) => async (dispatch: Dispatch) => {
  dispatch(createListRequest());
  try {
    const list = await fakeCreateList(name);
    dispatch(createListSuccess(list));
  } catch (err) {
    dispatch(createListFailure());
  }
};

const createListRequest = () => ({
  type: actions.CREATE_LIST_REQUEST
});

const createListSuccess = (list: IList) => ({
  type: actions.CREATE_LIST_SUCCESS,
  list
});

const createListFailure = () => ({
  type: actions.CREATE_LIST_FAILURE
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

export const deleteList = (id: string) => async (dispatch: Dispatch) => {
  dispatch(deleteListRequest());
  try {
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};

const deleteListRequest = () => ({
  type: actions.DELETE_LIST_REQUEST
});

const deleteListSuccess = (id: string) => ({
  type: actions.DELETE_LIST_SUCCESS,
  id
});

const deleteListFailure = () => ({
  type: actions.DELETE_LIST_FAILURE
});
