import React, { useState } from 'react'
import ToDoTask from './ToDoTask'
export default function ToDoList() {

    const [id,setId]=useState(0);
    const [tasks,setTasks]=useState([]);
    const [taskValue,setTaskValue]=useState('')
    function addItem(e)
    {    
       
        tasks.push({tid:id, value:taskValue});
        setId(id+1);
        setTasks(tasks);
    }
    
    
  return (
    <div>
        <p>This is To Do List component</p>
        <input placeholder='enter you task' onChange={(e)=>setTaskValue(e.target.value)}/>
        <button onClick={addItem}>Add item</button>

        {
            tasks.map((task,index)=>(
                 <ToDoTask key={task.tid} task={task.value} tasks={tasks} id={task.tid} setTasks={setTasks}/>
            ))
        }

    </div>
  )
}
