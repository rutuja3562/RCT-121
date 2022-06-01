import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import { ReduxContext, ReduxProvider } from './Context.jsx/ReduxProvider';
import { increamentcountaction } from './Context.jsx/action';
import store from './Context.jsx/store';
import { useDispatch,useSelector } from 'react-redux';
// import { increamentcountaction } from "./Context/action";

function App() {
  // const [getState,dispatch]=useContext(ReduxContext)
  // console.log(getState())
  // const [count,setCount]=useState(0);
const count = useSelector((state) => state.count);
const dispatch=useDispatch();
  // const state=getState();
  return (
    <div className="App">
      <h1>Counte:{count}</h1>
      <button onClick={() =>dispatch(increamentcountaction(1))}>add</button>
      <button onClick={() => dispatch(increamentcountaction(-1))}>sub</button>
    </div>
  );
}

export default App;
