import { IList } from "src/types";

export interface IMainStateProps {
  lists: IList[];
  pending: boolean;
}

export interface IMainDispatchProps {
  getLists: () => void;
}
