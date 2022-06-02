import { todoActions } from "./action";

const initState = {
  loading: false,
  todos: [],
  error: false,
};
export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case todoActions.GET_TODOS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case todoActions.GET_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    }
    case todoActions.GET_TODOS_FAILURE: {
      return {
        ...state,
        error: true,
      };
    }
    case todoActions.ADD_TODOS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case todoActions.ADD_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        
      };
    }
    case todoActions.ADD_TODOS_FAILURE: {
      return {
        ...state,
        error: true,
      };     
    }
    default:
      return state;
  }
};
