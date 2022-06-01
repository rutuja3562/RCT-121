export const appActions = {
  INC_COUNT: "ADD_COUNT",
  DEC_COUNT: "DEC_COUNT",
};

export const increamentcountaction = (count) => {
  return {
    type: appActions.INC_COUNT,
    payload: count,
  };
};
