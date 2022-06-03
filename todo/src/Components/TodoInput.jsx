import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTodos, getTodos } from "../Redux/action";
import styles from "./Todo.module.css";

export const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(
      addTodos({
        title: text,
      })
    ).then(() => {
      getTodos();
    });
    setText("")
  };
  return (
    <div>
      <h1>Add Todos</h1>
      <Link to={"./todolist"}>
        <button className={styles.button}>Go to TodoList</button>
      </Link>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder=" Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
