const { legacy_createStore } = require("redux");
const reducer = (state, action) => {
  switch (action.type) {
    case "increament": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "decreament": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default: {
      return state;
    }
  }
};

class Store {
  #reducer;
  #state;
  constructor(reducer, initState) {
    (this.#reducer = reducer), (this.#state = initState), (this.listeners = []);
  }
  getState() {
    return this.#state;
  }
  dispatch(action) {
    this.#state = this.#reducer(this.#state, action);
    this.listeners.forEach(listener=>listener())
  }
  subscribe(listener) {
    this.listeners.push(listener);
  }
}
const initState = { count: 0 };
const store = legacy_createStore(reducer, initState);
// const store = new Store(reducer,initState)
store.subscribe(()=>{
    console.log(store.getState());
})
// console.log("state=",store.getState());
store.dispatch({ type: "increament" });
store.dispatch({ type: "increament" });

// console.log("LLL",store.getState());

