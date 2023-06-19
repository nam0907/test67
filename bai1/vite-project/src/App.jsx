import React from 'react'
import { useState } from 'react';
import Todolist from './Todolist';
import TodolistHeader from './TodolistHeader';
import Footer from './Footer';
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
    setTask("");
    localStorage.setItem("task",JSON.stringify(list));
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
    <Footer/>
    </div>
  );
};

export default App