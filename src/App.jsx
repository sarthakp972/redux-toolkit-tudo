import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
 

  return (
    <div>
<AddTodo/>
 <Todos/>
    </div>
  )
}

export default App
