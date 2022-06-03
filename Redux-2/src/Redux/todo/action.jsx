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

  /*Delete Todo*/
  DELETE_TODOS_REQUEST: "DELETE_TODOS_REQUEST",
  DELETE_TODOS_SUCCESS: "DELETE_TODOS_SUCCESS",
  DELETE_TODOS_FAILURE: "DELETE_TODOS_FAILURE",
};

export const getTodoRequest = () => {
  /*Get Todo*/
  return {
    type: todoActions.GET_TODOS_REQUEST,
  };
};
export const getTodoSuccess = (data) => {
  return {
    type: todoActions.GET_TODOS_SUCCESS,
    payload: data,
  };
};
export const getTodoFailure = () => {
  return {
    type: todoActions.GET_TODOS_FAILURE,
  };
};

export const getTodos = (dispatch) => {
  const todoRequestAction = getTodoRequest();
  dispatch(todoRequestAction);
  return axios({
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
export const addTodoSuccess = (data) => {
  return {
    type: todoActions.ADD_TODOS_SUCCESS,
    payload: data,
  };
};
export const addTodoFailure = () => {
  return {
    type: todoActions.ADD_TODOS_FAILURE,
  };
};

export const addTodos = ({ dispatch }) => {
  const todoRequestAction = addTodoRequest();
  dispatch(todoRequestAction);
 return axios({
    method: "POST",
    url: "http://localhost:8080/todos",
    data: {
      title,
      status: false,
    },
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


 export const deleteTodoRequest = () => {
   return {
     type: todoActions.DELETE_TODOS_REQUEST,
   };
 };
 export const deleteTodoSuccess = (id) => {
   return {
     type: todoActions.DELETE_TODOS_SUCCESS,
    id
   };
 };
 export const deleteTodoFailure = () => {
   return {
     type: todoActions.DELETE_TODOS_FAILURE,
   };
 };

 export const deleteTodos = ({id,dispatch} ) => {
console.log("id",id)
   const todoRequestAction = deleteTodoRequest();
   dispatch(todoRequestAction);
   axios({
     method: "",
     url: `http://localhost:8080/todos/${id}`,
     data: {
       id,
       status: false,
     },
   })
     .then((res) => {
       const todoSuccessAction = deleteTodoSuccess();
       dispatch(todoSuccessAction);
     })
     .catch((error) => {
       const todoFailureAction = deleteTodoFailure();
       dispatch(todoFailureAction);
     });
 };

