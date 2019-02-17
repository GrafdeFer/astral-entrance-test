import { listActions } from "src/constants/index";
import { IListItem } from "src/types";
import { viewActions } from "./constants";

export const addTag = (listID: string, tag: string) => ({
  type: listActions.ADD_TAG,
  listID,
  tag
});

export const removeTag = (listID: string, tag: string) => ({
  type: listActions.REMOVE_TAG,
  listID,
  tag
});

export const addItem = (listID: string, item: IListItem) => ({
  type: listActions.ADD_ITEM,
  listID,
  item
});

export const removeItem = (listID: string, itemID: string) => ({
  type: listActions.ADD_ITEM,
  listID,
  itemID
});

export const removeList = (listID: string) => ({
  type: listActions.ADD_ITEM,
  listID
});

export const togglePurchaseItem = (listID: string, itemID: string) => ({
  type: listActions.TOGGLE_PURCHASE_ITEM,
  listID,
  itemID
});

export const changeItemName = (name: string) => ({
  type: viewActions.CHANGE_ITEM_NAME,
  name
});

export const changeItemCount = (count: number) => ({
  type: viewActions.CHANGE_ITEM_COUNT,
  count
});

export const changeItemPrice = (price: number) => ({
  type: viewActions.CHANGE_ITEM_PRICE,
  price
});
