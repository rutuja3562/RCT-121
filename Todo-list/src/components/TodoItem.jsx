import React from 'react'
import { nanoid } from 'nanoid'
export const TodoItem = ({todo,handleStatus,removetodo}) => {
  return (
    <div style={{marginBottom:"10px"}}>
    {todo.title} : {todo.status ? "Done" : "Not Done"}
    <button onClick={()=>{
    handleStatus(todo.id)
    }} style={{marginLeft:"10px"}}>Toggle</button>
    <button onClick={()=>{removetodo(todo.id)}}>Remove</button>
    </div>
  )
}
