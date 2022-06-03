import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodos } from "../Redux/action";
// import styles from "./Todo.module.css"
import styles from "./Todo.module.css";
export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  // console.log(todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodos({ id }));
  };

  return (
    <div className={styles.todolist}>
      <h2>TodoList</h2>
      {todos.map((e) => {
        return (
          <div key={e.id} className={styles.tododiv}>
            <div style={{ width: "40%" }}>
              <p>{e.title}</p>
            </div>
            <div style={{ width: "20%" }}>
              <button className={styles.button}>TOGGLE</button>
            </div>
            <div style={{ width: "20%" }}>
              <Link to={`todolist/${e.id}`}>
                <button
                  className={styles.button}
                  onClick={() => {
                  //  to={`/product/${e.id}`}
                  }}
                >
                  EDIT
                </button>
              </Link>
            </div>
            <div style={{ width: "20%" }}>
              <button
                className={styles.button}
                onClick={() => {
                  handleDeleteTodo(e.id);
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
