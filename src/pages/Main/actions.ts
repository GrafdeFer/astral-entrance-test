import { Dispatch } from "redux";
import { fakeGetLists } from "src/api";
import { IList } from "src/types";
import actions from "./constants";

export const getLists = () => async (dispatch: Dispatch) => {
  dispatch(getListsRequest());
  try {
    const lists = await fakeGetLists();
    dispatch(getListsSuccess(lists));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

const getListsRequest = () => ({
  type: actions.GET_LISTS_REQUEST
});

const getListsSuccess = (lists: IList[]) => ({
  type: actions.GET_LISTS_SUCCESS,
  lists
});

const getListsFailure = () => ({
  type: actions.GET_LISTS_FAILURE
});
