import { legacy_createStore } from "redux";
import { increamentcountaction } from "./action";
import { reducer } from "./reducer";


// class Store {
//   #reducer;
//   #state;
//   constructor(reducer, initState) {
//     (this.#reducer = reducer)(this.#state = initState)(this.listeners = []);
//   }
//   getState() {
//     return this.#state;
//   }
//   dispatch(action) {
//     this.#state = this.#reducer(this.#state, action);
//     this.listeners.forEach((listener) => listener());
//   }
//   subscribe(listener) {
//     this.listeners.push(listener);
//   }
// }
const initState = { count: 0 };
const store = legacy_createStore(reducer, initState);
// const store = new Store(reducer,initState)
store.subscribe(() => {
  console.log(store.getState());
});
// console.log("state=",store.getState());
store.dispatch(increamentcountaction(0));
store.dispatch(increamentcountaction(0));

// console.log("LLL",store.getState());
export default store