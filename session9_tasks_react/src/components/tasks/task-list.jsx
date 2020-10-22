import React from 'react';
import TaskItem from './task-item';

export const TaskList =({tasks})=> (
    <section className="task-list " >
        <div className="container">
            <h1 className="mainTitle my-5" >Tasks</h1>
            <div className="allTasks" id="allTasks">
                {/* <h1 className="text-center" style="margin:100px auto; color: #7952B3;"><i className="fas fa-spinner "></i></h1> */}
                {tasks.map(task => <TaskItem  key={task.id} task={task} />)}
            </div>
            
            
        </div>
    </section>

);

export default TaskList;