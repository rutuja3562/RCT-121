import { combineReducers, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
const rootreducer = combineReducers({
  reducer,
});
export const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState())