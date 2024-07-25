import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../featuers/tudo/tudoSlice'

function Todos() {
 const todos=useSelector(state=>state.todos)
 const dispatch=useDispatch()
  return (
    <>
     <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Todos</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center">
            <span className="flex-1">{todo.text}</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Todos
