import { IView } from "src/types";

const initialState: IView = {
  list: {
    id: "",
    items: [],
    created: "",
    name: "",
    tags: [],
    totalPrice: 0
  },
  pending: false
};

// TODO: to add action types
export default function viewReducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
