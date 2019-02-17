import { ILists, INewList } from "src/types";

export interface IMainStateProps {
  lists: ILists;
  newList: INewList;
}

export interface IMainDispatchProps {
  createList: (name: string) => void;
  changeName: (name: string) => void;
  openForm: () => void;
  resetForm: () => void;
}
