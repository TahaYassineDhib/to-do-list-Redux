import React, { useState } from "react";


const Task = ({ todo }) => {

  const [isDone, setIsDone] = useState(false);
  const [edited, setEdited] = useState(todo);

  let iStyle = { color: "white" };
  isDone ? (iStyle = { color: "lightgreen"  }) : (iStyle = { color: "white" });




  return (
    <div>
      <input type="text" value={todo.task} readOnly className="task" />
      <i
        style={iStyle}
        className="fa-solid fa-check  "
        onClick={() => {
          setIsDone(!isDone);
          
        }}
      ></i>
      <i
        className="fa-solid fa-pen-to-square edit"
        onClick={() =>
          {setEdited({ ...edited, task: prompt("change your todo") });
          console.log(edited);
        
        }
        }
      ></i>
    </div>
  );
};

export default Task;
