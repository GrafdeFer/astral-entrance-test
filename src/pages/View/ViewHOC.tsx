import { connect } from "react-redux";
import { IState } from "src/types";
import { IViewStateProps } from "./types";
import View from "./View";

const mapState2Props = (state: IState) => ({
  lists: state.lists.lists
});

export default connect<IViewStateProps, null, null>(
  mapState2Props,
  null
)(View);
