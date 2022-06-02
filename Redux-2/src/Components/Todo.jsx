import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getTodos,
} from "../Redux/todo/action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos(dispatch);
  }, []);
  return (
    <div>
      <h1>Todo Input</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};
