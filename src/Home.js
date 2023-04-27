import React, { useState } from 'react'  
import Todos from './components/Todos'
import style from './components/home.module.css'
import Newtodo from './components/Newtodo'
import {v4 as uuidv4} from "uuid";

export const Home = () => {

  const [todos, setTodos] = useState([]);


  const handeltodos = (todo) =>{
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), todo}]
    })
  }
  
  const handelRemoveTodo = (id) =>{
    setTodos((prevTodos)=>{
      const FilterTodos = todos.filter((todo)=> todo.id !== id)
      return FilterTodos;
    });
  } 

  return (
    <div className={style.container}>
         <h1 style={{color:"white"}}>TODO APP</h1>
         <Newtodo onAddTodo={handeltodos}/>
         <Todos todos={todos} onRemoveTodo={handelRemoveTodo}/>
    </div>
  )
}
