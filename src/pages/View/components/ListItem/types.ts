import { IListItem } from "src/types";

export interface IListItemStateProps {
  list: IListItem;
  listID: string;
}

export interface IListItemDispatchProps {
  removeItem: (listID: string, itemID: string) => void;
  togglePurchaseItem: (listID: string, itemID: string) => void;
}
