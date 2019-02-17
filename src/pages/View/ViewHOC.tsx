import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "src/types";
import { addTag, deleteTag } from "./actions";
import { IViewDispatchProps, IViewStateProps } from "./types";
import View from "./View";

const mapState2Props = (state: IState) => ({
  list: state.view.list,
  pending: state.view.pending
});

const mapDispatch2Props = (
  dispatch: ThunkDispatch<IState, void, Action<string>>
) => ({
  addTag: (tag: string) => dispatch(addTag(tag)),
  deleteTag: (tag: string) => dispatch(deleteTag(tag))
});

export default connect<IViewStateProps, IViewDispatchProps, null>(
  mapState2Props,
  mapDispatch2Props
)(View);
