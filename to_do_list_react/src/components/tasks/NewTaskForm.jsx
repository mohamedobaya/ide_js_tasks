import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbtack } from '@fortawesome/free-solid-svg-icons';
export const NewTaskForm=({App})=>(
    <div className="new-task-form my-5">
        <div className="container bg-dark">
            <h2 className="heading py-3 d-flex justify-content-center">
                Add New Task
            </h2>
            <form className="py-5  mx-3" >
                <div className="form-group mt-2">
                    <input className="form-control"
                    id="title" type="text"  
                    placeholder="Task title"
                    value={App.state.newTask.title}
                    onChange={App.onInputChangeHandleAdd} />
                </div>
                <div className="form-group">
                    <textarea className="form-control " 
                    id="description" 
                    rows="3"  
                    placeholder="Task task-description"
                    value={App.state.newTask.description}
                    onChange={App.onInputChangeHandleAdd} />
                </div>
               <div className="form-group ">
                    <input className="form-control  "
                     id="date" type="text"  
                     placeholder="dd/mm/yyyy"
                     value={App.state.newTask.date}
                     onChange={App.onInputChangeHandleAdd}  />
                </div>               
                <button type="button"  
                className="btn addTask" onClick={App.onAddTaskHandle}>add new task <FontAwesomeIcon icon={faThumbtack} /></button>
            </form>
        </div>
    </div>
);

export default NewTaskForm;