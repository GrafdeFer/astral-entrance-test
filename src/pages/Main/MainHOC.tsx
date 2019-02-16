import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "src/types";
import {
  changeName,
  createList,
  deleteList,
  getLists,
  openForm,
  resetForm
} from "./actions";
import Main from "./Main";
import { IMainDispatchProps, IMainStateProps } from "./types";

const mapState2Props = (state: IState) => ({
  lists: state.main.lists,
  pending: state.main.pending,
  newList: state.main.newList
});

const mapDispatch2Props = (
  dispatch: ThunkDispatch<IState, void, Action<string>>
) => ({
  getLists: () => dispatch(getLists()),
  createList: (name: string) => dispatch(createList(name)),
  changeName: (name: string) => dispatch(changeName(name)),
  openForm: () => dispatch(openForm()),
  resetForm: () => dispatch(resetForm()),
  deleteList: (id: string) => dispatch(deleteList(id))
});

export default connect<IMainStateProps, IMainDispatchProps, null>(
  mapState2Props,
  mapDispatch2Props
)(Main);
