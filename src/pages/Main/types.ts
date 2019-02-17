import { IList, INewList } from "src/types";

export interface IMainStateProps {
  lists: IList[];
  pending: boolean;
  newList: INewList;
}

export interface IMainDispatchProps {
  createList: (name: string) => void;
  changeName: (name: string) => void;
  openForm: () => void;
  resetForm: () => void;
  deleteList: (id: string) => void;
}
