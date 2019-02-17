import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IListItem, IState } from "src/types";
import {
  addItem,
  addTag,
  changeItemCount,
  changeItemName,
  changeItemPrice,
  removeItem,
  removeList,
  removeTag,
  togglePurchaseItem
} from "./actions";
import { IViewDispatchProps, IViewStateProps } from "./types";
import View from "./View";

const mapState2Props = (state: IState) => ({
  lists: state.lists.lists,
  newItem: state.view.newItem
});

const mapDispatch2Props = (dispatch: Dispatch) => ({
  addTag: (listID: string, tag: string) => dispatch(addTag(listID, tag)),
  removeTag: (listID: string, tag: string) => dispatch(removeTag(listID, tag)),
  addItem: (listID: string, item: IListItem) => dispatch(addItem(listID, item)),
  removeItem: (listID: string, itemID: string) =>
    dispatch(removeItem(listID, itemID)),
  removeList: (listID: string) => dispatch(removeList(listID)),
  togglePurchaseItem: (listID: string, itemID: string) =>
    dispatch(togglePurchaseItem(listID, itemID)),
  changeItemName: (name: string) => dispatch(changeItemName(name)),
  changeItemCount: (count: number) => dispatch(changeItemCount(count)),
  changeItemPrice: (price: number) => dispatch(changeItemPrice(price))
});

export default connect<IViewStateProps, IViewDispatchProps, null>(
  mapState2Props,
  mapDispatch2Props
)(View);
