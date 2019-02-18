import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IListItem, IState } from "src/types";
import {
  addItem,
  changeItemCount,
  changeItemName,
  changeItemPrice
} from "../../actions";
import NewItemForm from "./NewItemForm";
import {
  INewItemFormDispatchProps,
  INewItemFormProps,
  INewItemFormStateProps
} from "./types";

const mapState2Props = (state: IState) => ({
  newItem: state.view.newItem
});

const mapDispatch2Props = (dispatch: Dispatch) => ({
  addItem: (listID: string, item: IListItem) => dispatch(addItem(listID, item)),
  changeItemName: (name: string) => dispatch(changeItemName(name)),
  changeItemCount: (count: number) => dispatch(changeItemCount(count)),
  changeItemPrice: (price: number) => dispatch(changeItemPrice(price))
});

export default connect<
  INewItemFormStateProps,
  INewItemFormDispatchProps,
  INewItemFormProps
>(
  mapState2Props,
  mapDispatch2Props
)(NewItemForm);
