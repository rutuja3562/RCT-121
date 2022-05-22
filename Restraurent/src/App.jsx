import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Food } from './Components/Food'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Food/>
    </div>
  )
}

export default App
