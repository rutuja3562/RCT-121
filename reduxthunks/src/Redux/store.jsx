import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import { authReducer } from "./reducer"
import thunk from "redux-thunk";
const rootReducer = combineReducers({
   data : authReducer
})
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
    console.log("getState")
//   saveToLocalStorage("CCC",store.getState());
  console.log("state", store.getState());
});