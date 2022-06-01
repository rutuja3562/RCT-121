import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Users } from "./Components/Users";
import { UserPage } from "./Components/UserPage";
import { Nav } from "./Components/Nav";
import { PrivateRoot } from "./Components/PrivateRoot";
import { Login } from "./Components/Login";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/users"
          element={
            <PrivateRoot>
              <Users />
            </PrivateRoot>
          }
        ></Route>
        <Route
          path="/users/:id"
          element={
            <PrivateRoot>
              <UserPage />
            </PrivateRoot>
          }
        />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
