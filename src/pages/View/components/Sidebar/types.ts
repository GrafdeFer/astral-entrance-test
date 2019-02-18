import { IListItem } from "src/types";

export interface IViewStateProps {
  listID: string;
  tags: string[];
  items: IListItem[];
}

export interface IViewDispatchProps {
  addTag: (listID: string, tag: string) => void;
  removeTag: (listID: string, tag: string) => void;
  removeList: (listID: string) => void;
}
