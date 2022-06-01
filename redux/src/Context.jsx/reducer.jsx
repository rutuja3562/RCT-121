import { appActions } from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case appActions.INC_COUNT: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case appActions.DEC_COUNT: {
      return {
        ...state,
        count: state.count - action.payload,
      };
    }
    default: {
      return state;
    }
  }
};