import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IState } from "src/types";
import { removeItem, togglePurchaseItem } from "./actions";
import { IViewDispatchProps, IViewStateProps } from "./types";
import View from "./View";

const mapState2Props = (state: IState) => ({
  lists: state.lists.lists
});

const mapDispatch2Props = (dispatch: Dispatch) => ({
  removeItem: (listID: string, itemID: string) =>
    dispatch(removeItem(listID, itemID)),
  togglePurchaseItem: (listID: string, itemID: string) =>
    dispatch(togglePurchaseItem(listID, itemID))
});

export default connect<IViewStateProps, IViewDispatchProps, null>(
  mapState2Props,
  mapDispatch2Props
)(View);
