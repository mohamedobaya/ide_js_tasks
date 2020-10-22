import React from 'react';


export const TaskItem =({task})=> (
    <div class="task my-5 " >
        <div className="task-header">
            <h2   className={`task-title pl-3 task-title ${task.isDone? 'taskDone' : ''}`} >{task.title}</h2>
            
            <div class="task-edit-btns ">
                <button  className={`mx-2 btn  btn-success edit  ${task.isDone? 'd-none' : ''}`}>Edit </button>
                <button  className={`mx-2 btn done btn-${task.isDone?  'warning' : 'primary'}`} >
                    { task.isDone? 'unDone ' : 'Done ' }
                </button>
                <button  className="mx-2 btn btn-danger remove ">Remove </button>
            </div>
        </div>
        <div class="task-details ">
            <div className="task-description pt-3 pl-3 ">
                <p >{task.description}</p>
                <div  className="time pl-3">{task.time}</div>
                <div  className="date pl-3">{task.date}</div>
            </div>
                        
         </div>
    </div>

);

export default TaskItem;