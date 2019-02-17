import { IList } from "src/types";

export interface IViewStateProps {
  list: IList;
}

export interface IViewDispatchProps {
  addTag: (tag: string) => void;
  deleteTag: (tag: string) => void;
}
