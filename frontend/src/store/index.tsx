import { createStore, combineReducers, compose } from "redux";

import { publicationsReducer } from "./modules/publications";

const rootReducer = combineReducers({
  publications: publicationsReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
