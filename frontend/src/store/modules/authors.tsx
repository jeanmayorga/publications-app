import { typedAction } from "../helpers";
import { Author } from "../../interfaces";

const initialState: Author[] = [];

// Actions
export const setAuthors = (payload: Author[]) => {
  return typedAction("setAuthors", payload);
};
export const addAuthors = (payload: Author) => {
  return typedAction("addAuthors", payload);
};

type Actions = ReturnType<typeof setAuthors | typeof addAuthors>;

// Redurers
export function authorsReducer(
  state: Author[] = initialState,
  action: Actions
): Author[] {
  switch (action.type) {
    case "setAuthors":
      return action.payload;
    case "addAuthors":
      return [action.payload, ...state];
    default:
      return state;
  }
}
