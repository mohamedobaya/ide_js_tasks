import React, { Fragment } from 'react';


export const AddTask =({isAddNewTaskWindow ,App})=> (
    <Fragment>
        <section className="new-task my-5 " >
        <div className="container">
                    <button id="addTaskWindow" onClick={App.addNewTaskWindowHandle} className={`btn btnAdd addTask my-5 ${isAddNewTaskWindow? 'd-none' : ''}`}>
                        add new task
                    </button>
                </div>
            <div className={`container bg-dark ${!isAddNewTaskWindow? 'd-none' : ''}`}>
                <div className="newTaskWindow"> 
                    <div id="closeAddTask" className="close mt-3 mr-3" onClick={App.addNewTaskWindowHandle}>X</div>
                    <br/>
                    <div className="heading mt-3 ml-3 ">
                        <h1>New Task</h1>
                    </div>
                    <form className="py-5  mx-3" onSubmit ={App.AddTaskHandle}>
                        <div className="form-group mt-2">
                            <input className="form-control" 
                            id="title" type="text" 
                            value={App.state.newTask.title} 
                            placeholder="Task title" 
                            onChange={App.onChangeHandle}/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control " id="description" rows="3" value={App.state.newTask.description} placeholder="Task task-description" onChange={App.onChangeHandle}/>
                        </div>
                        <div className="form-group ">
                            <input className="form-control  " id="time" type="text" value={App.state.newTask.time} placeholder="hh:mm" onChange={App.onChangeHandle}/>
                        </div>
                        <div className="form-group ">
                            <input className="form-control  " id="date" type="text" value={App.state.newTask.date} placeholder="dd/mm/yyyy" onChange={App.onChangeHandle} />
                        </div>               
                        <button type="button" id="addTask" className="btn btnAdd addTask" >add new task <i className="fas fa-thumbtack pl-1"></i></button>
                    </form>
                </div>
            </div>
        </section>
    </Fragment>
    
);

export default AddTask;