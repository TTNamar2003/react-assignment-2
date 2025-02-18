import React from 'react'

export default function ToDoTask({task,tasks,id,setTasks}) {
 
  function removeTask(id)
  { 
    setTasks(tasks.filter((element) => element.tid !== id));
   
  }
  return (
    <div>
        <p>{task}</p>
        <button onClick={()=>removeTask(id)}>remove</button>
    </div>
  )
}
