import axios from "axios";

export const todoActions = {
  // Get Todos
  GET_TODOS_REQUEST: "GET_TODOS_REQUEST",
  GET_TODOS_SUCCESS: "GET_TODOS_SUCCESS",
  GET_TODOS_FAILURE: "GET_TODOS_FAILURE",

  // Add Todos
  ADD_TODOS_REQUEST: "ADD_TODOS_REQUEST",
  ADD_TODOS_SUCCESS: "ADD_TODOS_SUCCESS",
  ADD_TODOS_FAILURE: "ADD_TODOS_FAILURE",

  // Delete Todo

  DELETE_TODOS_REQUEST: "DELETE_TODOS_REQUEST",
  DELETE_TODOS_SUCCESS: "DELETE_TODOS_SUCCESS",
  DELETE_TODOS_FAILURE: "DELETE_TODOS_FAILURE",

  //Update Todo
  UPDATE_TODOS_REQUEST: "UPDATE_TODOS_REQUEST",
  UPDATE_TODOS_SUCCESS: "UPDATE_TODOS_SUCCESS",
  UPDATE_TODOS_FAILURE: "UPDATE_TODOS_FAILURE",
};

 // Get Todos

export const getTodoRequest = () => {
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

export const getTodos = () => {
  return function (dispatch) {
    const todoRequestAction = getTodoRequest();
    dispatch(todoRequestAction);
    return axios({
      url: "http://localhost:8080/todos",
      method: "GET",
    })
      .then((res) => {
        // console.log("resdata:",res.data.length)
        const todoSuccessAction = getTodoSuccess(res.data);
        dispatch(todoSuccessAction);
      })
      .catch((e) => {
        const todoFailureAction = getTodoFailure();
        dispatch(todoFailureAction);
      });
  };
};

// Add Todos

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

export const addTodos = ({title}) =>{
  return function (dispatch) {
    const todoRequestAction = addTodoRequest();
    dispatch(todoRequestAction);
    return axios({
      url: "http://localhost:8080/todos",
      method: "POST",
      data:{
      title,
        statue:false,
      }
    })
      .then((res) => {
        console.log(res.data);
        const todoSuccessAction = addTodoSuccess(res.data);
        dispatch(todoSuccessAction);
      })
      .catch((e) => {
        const todoFailureAction = addTodoFailure();
        dispatch(todoFailureAction);
      });
  };
};


// Delete Todo


export const deleteTodoRequest = () => {
  return {
    type: todoActions.DELETE_TODOS_REQUEST,
  };
};
export const deleteTodoSuccess = () => {
  return {
    type: todoActions.DELETE_TODOS_SUCCESS,
   
  };
};
export const deleteTodoFailure = () => {
  return {
    type: todoActions.DELETE_TODOS_FAILURE,
  };
};

export const deleteTodos = ({id}) => {
  return function (dispatch) {
    const todoRequestAction = deleteTodoRequest();
    dispatch(todoRequestAction);
    return axios.delete(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        // console.log(res.data);
        const todoSuccessAction = deleteTodoSuccess();
        dispatch(todoSuccessAction);
      })
      .catch((e) => {
        const todoFailureAction = deleteTodoFailure();
        dispatch(todoFailureAction);
      });
  };
};

//Update Todos

// export const updateTodoRequest = () => {
//   return {
//     type: todoActions.UPDATE_TODOS_REQUEST,
//   };
// };
// export const updateTodoSuccess = () => {
//   return {
//     type: todoActions.UPDATE_TODOS_SUCCESS,
//   };
// };
// export const updateTodoFailure = () => {
//   return {
//     type: todoActions.UPDATE_TODOS_FAILURE,
//   };
// };

// export const updateTodos = ({ id ,title}) => {
//   return function (dispatch) {
//     const todoRequestAction = updateTodoRequest();
//     dispatch(todoRequestAction);
//     return axios
//       .delete(`http://localhost:8080/todos/${id}`)
//       .then((res) => {
//         // console.log(res.data);
//         const todoSuccessAction = updateTodoSuccess();
//         dispatch(todoSuccessAction);
//       })
//       .catch((e) => {
//         const todoFailureAction = updateFailure();
//         dispatch(todoFailureAction);
//       });
//   };
// };
