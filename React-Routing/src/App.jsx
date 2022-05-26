import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./Components/Home";
import { Products } from "./Components/Products";
import { ProductDetails } from "./Components/ProductDetails";
import { Nav } from "./Components/Nav";
import { Error } from "./Components/Error";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {<Route path="*" element={<Error />} />}
      </Routes>
    </div>
  );
}

export default App;
