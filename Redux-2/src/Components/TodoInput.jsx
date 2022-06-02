import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos, getTodos } from '../Redux/todo/action'

export const TodoInput = () => {
    const [text,setText] = useState("")
    const dispatch = useDispatch()
    const handleAddTodo=()=>{
        addTodos({
            title:text,
            dispatch
        }).then(()=>{
            getTodos(dispatch)
        })
    }
  return (
    <div>
    <input type="text" placeholder='Todo' value={text} onChange={(e)=>setText(e.target.value)} />
    <button onClick={handleAddTodo}>Add Todos</button>
    </div>
  )
}
