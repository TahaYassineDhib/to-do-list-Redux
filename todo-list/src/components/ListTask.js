import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";




const ListTask = () => {
  const todos = useSelector((state) => state.todo.datas);
  

  return todos.map((item , index) => <Task key={index} todo={item}/>);
};

export default ListTask;
