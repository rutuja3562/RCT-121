import React, { useState } from "react";

export const TodoInput = () => {
  const [task, setTask] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTask();
//   };

  return (
    <div>
   
        <input
          type="text"
          placeholder=" Todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add Todo</button>
      
    </div>
  );
};
