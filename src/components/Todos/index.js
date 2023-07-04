import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { addTodo,updateTodo,deleteTodo } from "../todoSlice/todoslice";
import {RiDeleteBin6Line} from 'react-icons/ri'
import './index.css'

const Todos=()=>{
const [inpVal,setInpVal]=useState('')
const todosList=useSelector((state)=>state.todos)
const dispatch=useDispatch()
console.log(todosList)

const addItem=()=>{
    dispatch(addTodo({id:todosList.length,title:inpVal,isChecked:false}))
    setInpVal('')
}

const changeStatus=(event,todo)=>{
let updTodo={...todo}
updTodo.isChecked=event.target.checked
dispatch(updateTodo(updTodo))
console.log('nm',updTodo)
}

const saveItems=()=>{
    localStorage.setItem('todos',JSON.stringify(todosList))
  
}

return(
    <div className="todos-home-container">
        <h1 style={{textAlign:'center'}}>Todos</h1>
        <div className="input-container">
            <h2>Create <span style={{color:'gray'}}>Task</span></h2>
            <input type="input" className="input-element" value={inpVal} placeholder="What needs to be done?" onChange={(event)=>setInpVal(event.target.value)}/>
            <button className="add-btn" type="button" onClick={()=>addItem()}>Add</button>
        </div>
        <div style={{padding:'20px'}}>
            <h2>My <span style={{color:'gray'}}>Tasks</span></h2>
            <ul className="todos-items-container">
                {
                    todosList.map(todo=> <li key={todo.id} className="list-item">
                        <input type="checkbox" checked={todo.isChecked} onChange={(event)=>changeStatus(event,todo)}/> 
                        <label id={`todo-${todo.id}`} className="list-item-label">
                            <span className={todo.isChecked?'line-through':'remove-line-through'}>{todo.title}</span>
                            <RiDeleteBin6Line onClick={()=>dispatch(deleteTodo(todo))}/>
                            </label>
                    </li>)
                }
            </ul>
            <button className="save-btn" type="button" onClick={()=>saveItems()}>Save</button>
        </div>
         </div>
)
}
export default Todos