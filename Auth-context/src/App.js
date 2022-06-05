import logo from './logo.svg';
import './App.css';
import { Nav } from './Components/Nav';
import { Login } from './Components/Login';
import { Route, Routes } from 'react-router';
import { Home } from './Components/Home';
import { Product } from './Components/Product';
import { PrivateComponent } from './Components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        ></Route>

        <Route
          path="/product"
          element={
            <PrivateComponent>
              <Product />
            </PrivateComponent>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
