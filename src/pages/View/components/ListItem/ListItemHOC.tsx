import { connect } from "react-redux";
import { Dispatch } from "redux";
import { removeItem, togglePurchaseItem } from "../../actions";
import Sidebar from "./ListItem";
import { IListItemDispatchProps, IListItemStateProps } from "./types";

const mapDispatch2Props = (dispatch: Dispatch) => ({
  removeItem: (listID: string, itemID: string) =>
    dispatch(removeItem(listID, itemID)),
  togglePurchaseItem: (listID: string, itemID: string) =>
    dispatch(togglePurchaseItem(listID, itemID))
});

export default connect<null, IListItemDispatchProps, IListItemStateProps>(
  null,
  mapDispatch2Props
)(Sidebar);
