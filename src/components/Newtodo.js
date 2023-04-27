import React, { useState } from 'react'
import style from './newtodo.module.css'
const Newtodo = (props) => {

    const [todo, setTodo] = useState({title:"", desc:""});
    const {title, desc} = todo;
    const handelSubmit = (event) =>{
        event.preventDefault();
        //console.log(todo);
        props.onAddTodo(todo);
        setTodo({title:"",desc:""});
    }
    const handelChange = (event) => {
        const name = event.target.name;
        setTodo((oldtodo)=>{
            return {...oldtodo,[name]:event.target.value}
            
        })
    }


  return (
    <form className={style.form} onSubmit={handelSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor='title'>Title: </label>
            <input type="text" id="title" name="title" value={title} onChange={handelChange}/>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='desc'>Description: </label>
            <textarea type="text" id="desc" name="desc" value={desc} onChange={handelChange}/>

        </div>
        <button>Add todo</button>
    </form>
  )
}

export default Newtodo