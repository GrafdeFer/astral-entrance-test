import { Dispatch } from "redux";
import actions from "./constants";

export const addTag = (tag: string) => async (dispatch: Dispatch) => {
  dispatch(addTagRequest());
  try {
    dispatch(addTagSuccess(tag));
  } catch (err) {
    dispatch(addTagFailure());
  }
};

const addTagRequest = () => ({
  type: actions.ADD_TAG_REQUEST
});

const addTagSuccess = (tag: string) => ({
  type: actions.ADD_TAG_SUCCESS,
  tag
});

const addTagFailure = () => ({
  type: actions.ADD_TAG_FAILURE
});

export const deleteTag = (tag: string) => async (dispatch: Dispatch) => {
  dispatch(deleteTagRequest());
  try {
    dispatch(deleteTagSuccess(tag));
  } catch (err) {
    dispatch(deleteTagFailure());
  }
};

const deleteTagRequest = () => ({
  type: actions.DELETE_TAG_REQUEST
});

const deleteTagSuccess = (tag: string) => ({
  type: actions.DELETE_TAG_SUCCESS,
  tag
});

const deleteTagFailure = () => ({
  type: actions.DELETE_TAG_FAILURE
});
