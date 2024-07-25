import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../featuers/tudo/tudoSlice'

function AddTodo() {
   
  const [input, setInput]=useState("") 
   const dispatch=useDispatch()
const addTodoHandler=(e)=>{
    e.preventDefault();
     dispatch(addTodo(input))
    console.log(input);
    setInput('')
    
    
}



  return (
    <>
    <div className='Container'>
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none w-full sm:w-64 mb-2 sm:mb-0"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
        Add
      </button>
    </form>
    </div>
    </>
  )
}
export default  AddTodo