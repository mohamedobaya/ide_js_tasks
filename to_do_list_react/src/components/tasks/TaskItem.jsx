import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditTask from './EditTaskWindow';
export const TaskItem=({task,App})=>(
    
    <div className="task bg-dark list-group-item list-group-item-action w-100">
        
        <div className="d-flex mb-3 w-100 justify-content-between">
            <h5 className={`task-title mb-1 ${task.isDone ? 'task-done':''}`} 
                data-id={task.id} 
                onClick={App.showTaskDetailsHandle}>
                    {task.title} 
            </h5>
            <div className={`buttons ${task.details ? 'd-none':''}`}>
                <button className={`btn mx-1 ${task.isDone ? 're-open':''}`} onClick={App.taskDoneHandle} data-id={task.id} >
                    {task.isDone ? 'Re-open ' : 'Done '}
                    <FontAwesomeIcon icon={task.isDone ? faTimes : faCheck}  data-id={task.id} />
                </button>
                <EditTask key={task.id} task={task} App={App}/>
                {/* <button className="btn mx-1" data-id={task.id}>  Edit <FontAwesomeIcon icon={faEdit} /></button> */}
                <button className="btn mx-1" onClick={App.taskRemoveHandle} data-id={task.id}>Remove <FontAwesomeIcon icon={faTrash} data-id={task.id}  /></button>
            </div>
        </div>
        <div className={`task-detailes ${task.details ? 'd-none':''}`}>
            <p className="task-description mb-1" data-id={task.id} >{task.description} </p>
            <small className="task-date text-muted" data-id={task.id} >{task.date} </small>
        </div>
    </div>
);

export default TaskItem;