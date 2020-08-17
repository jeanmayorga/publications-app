import { createStore, combineReducers, compose } from "redux";

import { publicationsReducer } from "./modules/publications";
import { authorsReducer } from "./modules/authors";
import { filteredAuthorsReducer } from "./modules/filteredAuthors";

const rootReducer = combineReducers({
  publications: publicationsReducer,
  filteredAuthors: filteredAuthorsReducer,
  authors: authorsReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
