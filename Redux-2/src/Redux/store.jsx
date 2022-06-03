import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
// import { authReducer } from "../Auth/authReducer";
import { todoReducer } from "./todo/reducer";
const rootReducer = combineReducers({
  todoReducer: todoReducer,

});
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log("STORE",store.getState())
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
