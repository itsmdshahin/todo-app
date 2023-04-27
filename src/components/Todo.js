import React from 'react'
import style from './todos.module.css'

const Todo = (props) => {
  const {title, desc} = props.todo;
  const { id } = props;
  const handelClick = (id) =>{
    props.onRemoveTodo(id);
  }
  return (
    <article className={style.todos}>
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
    <div>
      <button className={style.btn} onClick={()=>{
          handelClick(id)}}>
        <i className='fa fa-trash fa-2x'></i>
      </button>
    </div>
    </article>
  )
}

export default Todo