import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos, getTodos } from "../Redux/todo/action";

export const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const loading = useSelector((state) => state.todoReducer.loading);
  const dispatch = useDispatch();
  // console.log("todos", todos);
  const deleteTodo = (id) => {
    deleteTodos({
      id,
      dispatch,
    });
  };
  return (
    <div style={{ alignItems: "center" }}>
      {loading && <div>Loading....</div>}
      <h1>Todo List</h1>
      {todos.map((e) => {
        return (
          <div
            key={e.id}
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              width: "50%",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <p>{e.title}</p>
            <button onClick={() => deleteTodo(e.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
