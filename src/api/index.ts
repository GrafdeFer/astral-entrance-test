// import lists from "src/helpers/lists";
import { IList } from "src/types";

export const fakeCreateList = (name: string): IList => {
  const created = new Date().toISOString();
  return {
    id: created,
    items: [],
    created,
    name: name !== "" ? name : "Новый список",
    tags: [],
    totalPrice: 0
  };
};
