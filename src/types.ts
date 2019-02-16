export interface IListItem {
  count: number;
  created: string;
  id: number;
  name: string;
  price: number;
  purchased: boolean;
}

export interface IList {
  items: IListItem[];
  created: string;
  name: string;
  tags: string[];
  totalPrice: number;
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
