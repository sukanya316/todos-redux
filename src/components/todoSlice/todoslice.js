import { createSlice } from "@reduxjs/toolkit";

export const todoslice=createSlice({
   name: 'todos',
   initialState:localStorage.getItem('todos')===null?[]:JSON.parse(localStorage.getItem('todos')),
   reducers:{
    addTodo:(state,action)=>{
        state.push(action.payload)
        console.log('add')
    },
    updateTodo:(state,action)=>{ 
        const ind=state.findIndex(tod=>tod.id===action.payload.id)
        state[ind]=action.payload
        console.log('update')
    },
    deleteTodo:(state,action)=>{
        console.log('del',state)
        return state.filter(todo=>todo.id!==action.payload.id)
        // localStorage.setItem('todos',JSON.stringify('updatedTodos'))
        // return updatedTodos
        
    }
   }
})

export const {addTodo,updateTodo,deleteTodo} =todoslice.actions
export default todoslice.reducer