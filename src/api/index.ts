import lists from "src/helpers/lists";
import { IList } from "src/types";

export const fakeGetLists = () => {
  return lists;
};

export const fakeCreateList = (name: string): IList => {
  const created = new Date().toISOString();
  return {
    id: created,
    items: [],
    created,
    name,
    tags: [],
    totalPrice: 0
  };
};
