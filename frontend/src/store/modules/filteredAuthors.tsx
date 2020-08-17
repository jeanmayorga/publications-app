import { typedAction } from "../helpers";
import { Author } from "../../interfaces";

const initialState: Author[] = [];

// Actions
export const setFilteredAuthors = (payload: Author[]) => {
  return typedAction("setFilteredAuthors", payload);
};

type Actions = ReturnType<typeof setFilteredAuthors>;

// Redurers
export function filteredAuthorsReducer(
  state: Author[] = initialState,
  action: Actions
): Author[] {
  switch (action.type) {
    case "setFilteredAuthors":
      return action.payload;
    default:
      return state;
  }
}
