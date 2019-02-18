import { ILists } from "src/types";

export interface IViewStateProps {
  lists: ILists;
}

export interface IViewDispatchProps {
  removeItem: (listID: string, itemID: string) => void;
  togglePurchaseItem: (listID: string, itemID: string) => void;
}
