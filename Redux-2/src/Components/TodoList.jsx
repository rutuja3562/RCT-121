import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const loading = useSelector(state=>state.todoReducer.loading)
  console.log("todos", todos);
  return (
    <div>
    {loading && <div>Loading....</div>}
      <h1>Todo List</h1>
      {todos.map((e) => {
        return (
          <div key={e.id}>
            <p>{e.title}</p>
          </div>
        );
      })}
    </div>
  );
};
