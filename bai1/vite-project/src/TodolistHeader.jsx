import React from 'react'
import {useState} from 'react';
const TodolistHeader = ({todo}) => {
  const todos=todo?.filter((item)=>{
    return (item?.isComplied===false)
  })
  return (
  <div className="header">
    You have {todos?.length} task left
  </div>
  );
};

export default TodolistHeader;
