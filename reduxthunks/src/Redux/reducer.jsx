import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./action";

const initState = {
  loading: false,
  error: false,
  user: [],
};
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
