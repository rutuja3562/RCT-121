import { getActions } from "./action";
// import { appActions } from "./action";
const initState = { loading: false, todos: [], err: false };
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case getActions.GET_TODOS_REQUEST: {
      return {
        ...state,
        loading: true,
        err: false,
      };
    }
    case getActions.GET_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos:action.payload
      };
    
    }

    case getActions.GET_TODOS_FAILURE: {
      return {
        ...state,
        loading: false,
        err: true,
      };
    }
    default:
      return state;
  }
};
