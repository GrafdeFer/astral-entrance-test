import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "src/types";
import { changeName, createList, openForm, resetForm } from "./actions";
import Main from "./Main";
import { IMainDispatchProps, IMainStateProps } from "./types";

const mapState2Props = (state: IState) => ({
  lists: state.lists.lists,
  newList: state.main.newList
});

const mapDispatch2Props = (
  dispatch: ThunkDispatch<IState, void, Action<string>>
) => ({
  createList: (name: string) => dispatch(createList(name)),
  changeName: (name: string) => dispatch(changeName(name)),
  openForm: () => dispatch(openForm()),
  resetForm: () => dispatch(resetForm())
});

export default connect<IMainStateProps, IMainDispatchProps, null>(
  mapState2Props,
  mapDispatch2Props
)(Main);
