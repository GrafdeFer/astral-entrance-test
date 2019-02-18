import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addTag, removeTag } from "../../actions";
import Sidebar from "./Sidebar";
import { IViewDispatchProps, IViewStateProps } from "./types";

const mapDispatch2Props = (dispatch: Dispatch) => ({
  addTag: (listID: string, tag: string) => dispatch(addTag(listID, tag)),
  removeTag: (listID: string, tag: string) => dispatch(removeTag(listID, tag))
});

export default connect<null, IViewDispatchProps, IViewStateProps>(
  null,
  mapDispatch2Props
)(Sidebar);
