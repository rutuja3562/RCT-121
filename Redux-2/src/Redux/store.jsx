import { combineReducers, legacy_createStore as createStore} from "redux";
import { todoReducer } from "./todo/reducer";
const rootReducer = combineReducers({
    todoReducer:todoReducer
})
export const store = createStore(rootReducer)
// console.log("STORE",store.getState())