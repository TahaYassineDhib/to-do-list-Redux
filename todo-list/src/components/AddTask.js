import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/dataSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.value);
  
  const [newTodo, setNewTodo] = useState({
    id: Math.random(),
    task: "",
    isDone: false,
  })
  useEffect(() => {
    setNewTodo({...newTodo , task : inputValue })
  } , [inputValue])
  

  return (
    <button
      onClick={() => {
        
        
        dispatch(addTodo(newTodo));
      }}
    >
      ADD
    </button>
  );
};

export default AddTask;
