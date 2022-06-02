import axios from "axios";

export const todoActions = {
  /*Get Todos*/
  GET_TODOS_REQUEST: "GET_TODOS_REQUEST",
  GET_TODOS_SUCCESS: "GET_TODOS_SUCCESS",
  GET_TODOS_FAILURE: "GET_TODOS_FAILURE",
  /*Add Todos*/
  ADD_TODOS_REQUEST: "ADD_TODOS_REQUEST",
  ADD_TODOS_SUCCESS: "ADD_TODOS_SUCCESS",
  ADD_TODOS_FAILURE: "ADD_TODOS_FAILURE",
  /*Update Todo*/
//   UPDATE_TODOS_REQUEST: "UPDATE_TODOS_REQUEST",
//   UPDATE_TODOS_SUCCESS: "UPDATE_TODOS_SUCCESS",
//   UPDATE_TODOS_FAILURE: "UPDATE_TODOS_FAILURE",
};

export const getTodoRequest = () => {
  /*Get Todo*/
  return {
    type: todoActions.GET_TODOS_REQUEST,
  };
};
export const getTodoSuccess = (payload) => {
  return {
    type: todoActions.GET_TODOS_SUCCESS,
    payload,
  };
};
export const getTodoFailure = () => {
  return {
    type: todoActions.GET_TODOS_FAILURE,
  };
};

export const getTodos = (dispatch) => {
       console.log("==dispatch==", dispatch);
  const todoRequestAction = getTodoRequest();
  dispatch(todoRequestAction);
  axios({
    method: "GET",
    url: "http://localhost:8080/todos",
  })
    .then((res) => {
      const todoSuccessAction = getTodoSuccess(res.data);
      dispatch(todoSuccessAction);
    })
    .catch((error) => {
      const todoFailureAction = getTodoFailure();
      dispatch(todoFailureAction);
    });
};

 /*Add Todo*/

export const addTodoRequest = () => {
  return {
    type: todoActions.ADD_TODOS_REQUEST,
  };
};
export const addTodoSuccess = (payload) => {
  return {
    type: todoActions.ADD_TODOS_SUCCESS,
    payload,
  };
};
export const addTodoFailure = () => {
  return {
    type: todoActions.ADD_TODOS_FAILURE,
  };
};

export const addTodos = ({title,dispatch}) => {
  const todoRequestAction = addTodoRequest();
  dispatch(todoRequestAction);
  axios({
    method: "POST",
    url: "http://localhost:8080/todos",
    data:{
        title,
        status:false
    }
  })
    .then((res) => {
      const todoSuccessAction = addTodoSuccess();
      dispatch(todoSuccessAction);
    })
    .catch((error) => {
      const todoFailureAction = addTodoFailure();
      dispatch(todoFailureAction);
    });
};

 /*Update Todo*/

//  export const updateTodoRequest = () => {
//    return {
//      type: todoActions.UPDATE_TODOS_REQUEST,
//    };
//  };
//  export const updateTodoSuccess = (payload) => {
//    return {
//      type: todoActions.UPDATE_TODOS_SUCCESS,
//      payload,
//    };
//  };
//  export const updateTodoFailure = () => {
//    return {
//      type: todoActions.UPDATE_TODOS_FAILURE,
//    };
//  };

//  export const updateTodos = ( dispatch ) => {
  
//    const todoRequestAction = updateTodoRequest();
//    dispatch(todoRequestAction);
//    axios({
//      method: "",
//      url: "http://localhost:8080/todos",
//      data: {
//        title,
//        status: false,
//      },
//    })
//      .then((res) => {
//        const todoSuccessAction = updateTodoSuccess();
//        dispatch(todoSuccessAction);
//      })
//      .catch((error) => {
//        const todoFailureAction = updateTodoFailure();
//        dispatch(todoFailureAction);
//      });
//  };