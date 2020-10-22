import React, { Fragment } from 'react';
import TaskItem from './TaskItem';

export const TaskList=({tasks,App})=>(
    <Fragment>
        <div className="container task-list istmy-4  w-100  ">
            <h1 className="heading w-100 d-flex justify-content-center my-5">All Tasks</h1>
            <div className="row w-100 d-flex justify-content-center">
                <div className="list-group ">
                    {tasks.map(task => <TaskItem key={task.id} task={task} App={App} />)}
                </div>
            </div>
        </div>
    </Fragment> 
);

export default TaskList;