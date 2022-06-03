import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTodos } from "../Redux/action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {

  return (
    <div style={{ marginTop: "3rem" }}>
      <Link to={"/"}>
        <TodoInput />
      </Link>
    </div>
  );
};
//  <TodoList />;