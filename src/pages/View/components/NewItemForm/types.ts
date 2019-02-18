import { IListItem, INewItem } from "src/types";

export interface INewItemFormProps {
  listID: string;
}

export interface INewItemFormStateProps {
  newItem: INewItem;
}

export interface INewItemFormDispatchProps {
  changeItemName: (name: string) => void;
  changeItemCount: (count: number) => void;
  changeItemPrice: (price: number) => void;
  addItem: (listID: string, item: IListItem) => void;
}
