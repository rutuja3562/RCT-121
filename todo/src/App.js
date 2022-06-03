import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { Todo } from "./Components/Todo";
import { TodoInput } from "./Components/TodoInput";
import { Routes, Route } from "react-router-dom";
import { TodoList } from "./Components/TodoList";
import { getTodos } from "./Redux/action";
import { useEffect } from "react";
import { EditUser } from "./Components/EditUser";
function App() {
  // const histroy = unstable_HistoryRouter();
  // console.log(histroy)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoInput />}></Route>
        <Route path="/todolist" element={<TodoList />}></Route>
        <Route path="/todolist/:id" element={<EditUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
