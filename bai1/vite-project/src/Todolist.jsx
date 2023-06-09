import React from 'react'
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import {useState} from 'react';
const Todolist = ({todo,setTodo}) => {
  const [done,SetDone]=useState(true)
  const handleClick=(index)=>{
    const todo1=[...todo]
    todo1[index].isComplied=!todo1[index].isComplied
    setTodo(todo1)
  }
  const todo2=todo?.filter((items)=>{
    return items?.isComplied===false
  })
  const handleDone=()=>{
    done?SetDone(false):SetDone(true)
  }
  return (
    <div className="todo-list-container">
      <button onClick={()=>handleDone()}>{done?(<FaRegCircle/>):(<FaRegCheckCircle/>)}Not done only</button>
      <div>
        {done?(todo?.map((val,i)=>(
          <div className="todo-item-container done" key={val?.text}>
            <button className="check" onClick={()=>handleClick(i)}>{val?.isComplied===false?(<FaRegCircle size={25}/>):(<FaRegCheckCircle size={25}/>)}</button>
            <span className="item-title">{val?.text}</span>
          </div>
        ))):(todo2?.map((val,i)=>(
          <div className="todo-item-container done" key={val.text}>
            <span>{val.text}</span>
          </div>
        )))}
      </div>
    </div>
  );
};

export default Todolist;
