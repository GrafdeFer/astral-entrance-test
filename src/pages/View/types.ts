import { IListItem, ILists, INewItem } from "src/types";

export interface IViewStateProps {
  lists: ILists;
  newItem: INewItem;
}

export interface IViewDispatchProps {
  addTag: (listID: string, tag: string) => void;
  removeTag: (listID: string, tag: string) => void;
  addItem: (listID: string, item: IListItem) => void;
  removeItem: (listID: string, itemID: string) => void;
  removeList: (listID: string) => void;
  togglePurchaseItem: (listID: string, itemID: string) => void;
  changeItemName: (name: string) => void;
  changeItemCount: (count: number) => void;
  changeItemPrice: (price: number) => void;
}
