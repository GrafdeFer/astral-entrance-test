import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "src/types";
import { getLists } from "./actions";
import Main from "./Main";
import { IMainDispatchProps, IMainStateProps } from "./types";

const mapState2Props = (state: IState) => ({
  lists: state.main.lists,
  pending: state.main.pending
});

const mapDispatch2Props = (
  dispatch: ThunkDispatch<IState, void, Action<string>>
) => ({
  getLists: () => dispatch(getLists())
});

export default connect<IMainStateProps, IMainDispatchProps, null>(
  mapState2Props,
  mapDispatch2Props
)(Main);
