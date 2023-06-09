import React from "react";
import {useState} from "react" 
const Form = () => {
  const [task,setTask]=useState("");
  const [list,setList]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newTask = {
      text:task,
      isComplied:false,
    }
    setList([...list,newTask]);
    localStorage.setItem("task",JSON.stringify(list))
    setTask("")
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input required value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter task ..." />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
