import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faThumbtack ,faTrash} from '@fortawesome/free-solid-svg-icons';
export const NewTaskForm=({newSubTasks,App})=>(
    <div className="new-task-form my-5">
        <div className="container bg-dark">
            <h2 className="heading pt-3 d-flex justify-content-center">
                Add New Task
            </h2>
            <form className="py-5  w-100" >
                <div className="form-group mt-2">
                    <input className="form-control"
                    id="title" type="text"  
                    placeholder="Task title"
                    value={App.state.newTask.title}
                    onChange={App.onInputChangeHandleAdd}/>
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
                <div className="form-group mt-3">
                    <h3 className="sideHeading">Sub Tasks</h3>
                    {newSubTasks.map((newSubTask , index)=>(
                        <div className="my-3 d-flex">
                            <input className="form-control  "
                            type="text" 
                            data-index={index} 
                            data-id={newSubTask.id + index}
                            placeholder="sub task title"
                            value={App.state.newSubTasks[index].title}
                            onChange={App.onNewSubTaskChangeHandle}  />
                            {newSubTasks.length > 1 && <button type="button"
                                                                data-id={newSubTask.id + index}
                                                                data-index={index} 
                                                                className="col btn addSubTask mx-1"
                                                                onClick={App.removeSubTaskOnClickHandle}
                                                                onChange={App.onNewSubTaskChangeHandle} ><FontAwesomeIcon icon={faTrash} /></button>
                            }
                        </div>
                    ))}
                </div>               
                <button type="button"  
                className="btn addTask mx-1" onClick={App.onAddTaskHandle}>add new task <FontAwesomeIcon icon={faThumbtack} /></button>
                <button type="button"  
                className="btn addSubTask mx-1" onClick={App.addSubTaskOnClickHandle}>add sub task <FontAwesomeIcon icon={faPlus} /></button>
                
            </form>
        </div>
    </div>
);

export default NewTaskForm;