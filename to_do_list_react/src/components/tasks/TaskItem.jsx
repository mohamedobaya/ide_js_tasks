import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTasks,faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditTask from './EditTaskWindow';
import SubTask from './SubTask';
export const TaskItem=({index,task,App})=>(
    
    <div className="task bg-dark list-group-item list-group-item-action w-100" >
        
        <div className="d-flex mb-3 w-100 justify-content-between">
            <h5 className={`task-title mb-1 ${task.isDone ? 'task-done':''}`} 
                data-id={task.id} 
                data-index={index} 
                onClick={App.showTaskDetailsHandle}>
                    {task.title} 
            </h5>
            <div className={`buttons ${task.details ? 'd-none':''}`}>
                <button className={`btn mx-1 ${task.isDone ? 're-open':''}`} onClick={App.taskDoneHandle} data-id={task.id} >
                    {task.isDone ? 'Re-open ' : 'Done '}
                    <FontAwesomeIcon icon={task.isDone ? faTimes : faCheck}  data-index={index}  data-id={task.id} />
                </button>
                <EditTask key={task.id} data-index={index}  task={task} App={App}/>
                <button className="btn mx-1" onClick={App.showSubTasksHandle} data-index={index}  data-id={task.id}>Show Sub Tasks <FontAwesomeIcon icon={faTasks} /></button>
                {/* <button className="btn mx-1" data-id={task.id}>  Edit <FontAwesomeIcon icon={faEdit} /></button> */}
                <button className="btn mx-1" onClick={App.taskRemoveHandle} data-index={index}  data-id={task.id}>Remove <FontAwesomeIcon icon={faTrash} data-id={task.id}  /></button>
            </div>
        </div>
        <div className={`task-detailes ${task.details ? 'd-none':''}`}>
            <p className="task-description mb-1" data-id={task.id} data-index={index}  >{task.description} </p>
            <small className="task-date text-muted" data-id={task.id} data-index={index} >{task.date} </small>
            <div className={`subTasks ${task.subTasksDetails ? '':'d-none'}`}>
                <h6 className="sub-title my-2">Sub Tasks</h6>
                {
                    (task.subTasks.length===0)? <div className="d-flex justify-content-center" style={{color:"#7952B3"}}> no sub tasks</div>
                    : task.subTasks.map(subTask => <SubTask  index={index} key={subTask.id} subTask={subTask} task={task} App={App} />)
                } 
            </div>
        </div>
    </div>
);

export default TaskItem;