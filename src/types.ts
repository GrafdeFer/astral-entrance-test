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

export interface INewList {
  name: string;
  pending: boolean;
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
  lists: IList[];
  pending: boolean;
  newList: INewList;
}

export interface IView {
  list: IList;
  pending: boolean;
}

export interface IState {
  main: IMain;
  view: IView;
}
