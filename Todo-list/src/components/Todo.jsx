import axios from "axios";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodosInput } from "./TodosInput";

export const Todo = () => {
  const [todolist, setTodolist] = useState([]);
  const getData = (todos) => {
    const payload = {
      title: todos,
      status: false,
      id: nanoid(3),
    };
    axios.post("http://localhost:8080/todos",payload)
    setTodolist([...todolist, payload]);
  };

  const handleStatus =async(id) => {

console.log(id)
      
    setTodolist([
      ...todolist.map((e) => (e.id === id ? { ...e, status: !e.status } : e)),
    ]);
    // try {
    //   const response = await axios.patch(`http://localhost:8080/todos/${id}`,{...todolist,"status":"done"});
    //   console.log('Returned data:', response);
    //   setTodolist(response)
    // } catch (e) {
    //   console.log(`Axios request failed: ${e}`);
    // }


    // const newarr = todolist.map((e) => {
    //   if (e.id === id) {
    //     return {
    //       ...e,
    //       status: !e.status,
    //     };
    //   }
    //   return e;
    // });
    // setTodolist(newarr);
   };
  const removetodo = (id) => {
    const removeitm = todolist.filter((todos) => {
      return todos.id !== id;
    });
    setTodolist(removeitm);
  };
  return (
    <div>
      <TodosInput datafn={getData} />
      <div>
        {todolist.map((e) => {
          return (
            <div>
              <TodoItem
                handleStatus={handleStatus}
                removetodo={removetodo}
                todo={e}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
