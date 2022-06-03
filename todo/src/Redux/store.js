import { applyMiddleware, combineReducers, legacy_createStore as  createStore } from "redux";
import { todoReducer } from "./reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  todos : todoReducer
})

export const store = createStore(rootReducer,
  applyMiddleware(thunk))
console.log("state",store.getState())