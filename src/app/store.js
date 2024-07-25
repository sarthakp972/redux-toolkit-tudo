import { configureStore } from '@reduxjs/toolkit'
import  todoReducer  from '../featuers/tudo/tudoSlice'
export const store = configureStore({
    reducer:todoReducer
})
