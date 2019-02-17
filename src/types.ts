export interface IListItem {
  count: number;
  created: string;
  id: string;
  name: string;
  price: number;
  purchased: boolean;
}

export interface IList {
  items: IListItem[];
  created: string;
  id: string;
  name: string;
  tags: string[];
  totalPrice: number;
}

export interface ILists {
  [id: string]: IList;
}

export interface INewList {
  name: string;
  display: boolean;
}

export interface IFilters {
  tags: string[];
}

export interface IListForm {
  count: number;
  name: string;
  price: number;
  purchased: boolean;
}

export interface IListItemForm {
  name: string;
  tags: string[];
  items: IListItem[];
}

export interface IMain {
  newList: INewList;
}

export interface IView {
  list: IList;
  newItem: INewItem;
}

export interface IListsReducer {
  lists: ILists;
}

export interface INewItem {
  name: string;
  count: number;
  price: number;
}

export interface IState {
  main: IMain;
  view: IView;
  lists: IListsReducer;
}
