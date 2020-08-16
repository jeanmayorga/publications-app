import { typedAction } from "../helpers";
import { Publication } from "../../interfaces";

const initialState: Publication[] = [];

// Actions
export const setPublications = (payload: Publication[]) => {
  return typedAction("setPublications", payload);
};
export const addPublication = (payload: Publication) => {
  return typedAction("addPublication", payload);
};

type Actions = ReturnType<typeof setPublications | typeof addPublication>;

// Redurers
export function publicationsReducer(
  state: Publication[] = initialState,
  action: Actions
): Publication[] {
  switch (action.type) {
    case "setPublications":
      return action.payload;
    case "addPublication":
      return [action.payload, ...state];
    default:
      return state;
  }
}
