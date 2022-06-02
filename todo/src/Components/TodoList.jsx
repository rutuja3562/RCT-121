import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodoList = () => {
    const todos = useDispatch((state)=>state.todos);
    // console.log("todos",todos)
    // useEffect(()=>{
    //     axios({
    //       method: "GET",
    //       url: "http://localhost:8080/todos",
    //     }).then((res)=>{
            
    //     })
    // })
  return (
    <div>
      <h4>TodoList</h4>

    </div>
  );
};
