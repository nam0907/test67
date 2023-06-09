import React from 'react'
import { useState } from 'react';
import Todolist from './Todolist';
import TodolistHeader from './TodolistHeader';
import './style.css'
const App = () => {
  const [task,setTask]=useState("");
  const [list,setList]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newTask = {
      text:task,
      isComplied:false,
    }
    setList([...list,newTask]);
    setTask("")
}

  return (
    <div className="App">
       <div className="container">
        <TodolistHeader todo={list}/>
        <Todolist todo={list} setTodo={setList}/>
        <div>
        <form className="form" onSubmit={handleSubmit}>
      <input required value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
    </div>
  );
};

export default App