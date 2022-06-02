export const getActions = {
  GET_TODOS_REQUEST: "GET_TODOS_REQUEST",
  GET_TODOS_SUCCESS: "GET_TODOS_SUCCESS",
  GET_TODOS_FAILURE: "GET_TODOS_FAILURE",
};

export const todoRequestAction =()=>({
type:getActions.GET_TODOS_REQUEST,

})
export const todoSuccessAction = (data) => ({
  type: getActions.GET_TODOS_SUCCESS,
  payload: data,
});
export const todoFailureAction = () => ({
  type: getActions.GET_TODOS_FAILURE,
  
});