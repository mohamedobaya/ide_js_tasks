import React from 'react';
import SubTaskEdit from './SubTaskEdit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

export const SubTask = ({index,taskID,subTask,App}) => (
    <div className=" sub-task bg-dark list-group-item list-group-item-action w-100" >
        <div className="d-flex mb-3 w-100 justify-content-between">
            <h6 className={`sub-task-title mb-1 ${subTask.isDone ? 'sub-task-done':''}   `}
                data-id={subTask.id} data-index={index}>
                    {subTask.title} 
            </h6>
            <div className={`buttons ${subTask.details ? 'd-none':''}`}>
                <button className={`btn mx-1 ${subTask.isDone ? 're-open':''}`} onClick={App.subTaskDoneHandle} data-id={subTask.id} data-task={taskID}>
                    {subTask.isDone ? 'Re-open ' : 'Done '}
                    <FontAwesomeIcon icon={subTask.isDone ? faTimes : faCheck}  data-index={index} data-id={subTask.id} />
                </button>
                <SubTaskEdit key={subTask.id}  taskID={taskID} subTask={subTask}  App={App}/>
                <button className="btn mx-1" onClick={App.subTaskRemoveHandle} data-index={index} data-id={subTask.id} data-task={taskID}>Remove <FontAwesomeIcon icon={faTrash} data-id={subTask.id}  /></button>
            </div>
        </div>
    </div>
);

export default SubTask;