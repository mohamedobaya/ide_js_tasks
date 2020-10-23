import React, {Component, Fragment } from 'react';
import '../assets/sass/app.scss';
import layouts from '../pages';
import Tasklist from '../components/tasks/TaskList';
import NewTaskForm from './tasks/NewTaskForm';
import {
    Switch,
    Route
  } from "react-router-dom";



class App extends Component{
    state={
        tasks :[
            {
                id:0,
                title:'Task 1',
                description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aspernatur at rerum et in incidunt nostrum dolorum est aliquid ipsam possimus sed esse eius quo veniam iure, exercitationem, aut dolorem.',
                date:'19/12/2020',
                subTasks : [
                    {
                    id:1,
                    title : 'do dishes',
                    isDone : false
                    },
                    {
                    id:2,
                    title : 'clean room',
                    isDone : true
                    },
                    {
                    id:3,
                    title : 'do homework',
                    isDone : false
                    }
                ],
                details:true,
                subTasksDetails : false,
                isDone: true,
                editWindow: false
            },
            {
                id:1,
                title:'Task 2',
                description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aspernatur at rerum et in incidunt nostrum dolorum est aliquid ipsam possimus sed esse eius quo veniam iure, exercitationem, aut dolorem.',
                date:'21/12/2020',
                subTasks :[
                    {
                    id:1,
                    title : 'do dishes',
                    isDone : false
                    },
                    {
                    id:2,
                    title : 'clean room',
                    isDone : true
                    },
                    {
                    id:3,
                    title : 'do homework',
                    isDone : true
                    }
                ],
                details:true,
                subTasksDetails : false,
                isDone: false,
                editWindow: false
            },
            {
                id:2,
                title:'Task 3',
                description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aspernatur at rerum et in incidunt nostrum dolorum est aliquid ipsam possimus sed esse eius quo veniam iure, exercitationem, aut dolorem.',
                date:'01/01/2021',
                subTasks :[
                    {
                    id:1,
                    title : 'do dishes',
                    isDone : false
                    },
                    {
                    id:2,
                    title : 'clean room',
                    isDone : true
                    },
                    {
                    id:3,
                    title : 'do homework',
                    isDone : true
                    }
                ],
                details:true,
                subTasksDetails : false,
                isDone: false,
                editWindow: false
            }
        ],
        newTask : {
            id:Date.now(),
            title:'',
            description:'',
            date:'',
            subTasks :[
                
            ],
            details:false,
            subTasksDetails : false,
            isDone: false,
            editWindow: false
        },
        newSubTasks : [
            {

            id: Date.now(),
            title : ''
            }
        ],
        editTask : {
            id:Date.now(),
            title:'',
            description:'',
            date:'',
            subTasks : [],
            details:false,
            subTasksDetails : false,
            isDone: false,
            editWindow: false
        },
        
        editSubTask : {
            id:Date.now(),
            title:''
        },
        editWindow : false
    };
    onNewSubTaskChangeHandle = e =>{
        
        const newSubTasks = this.state.newSubTasks;
        newSubTasks[e.target.dataset.index].title = e.target.value;
        this.setState({newSubTasks});
        
        
    }
    addSubTaskOnClickHandle = () => {
        const newSubTask = {
            id: Date.now(),
            title: ''
        };
        const newSubTasks = [...this.state.newSubTasks, newSubTask];
        console.log(newSubTasks);
        this.setState({newSubTasks});
    };
    
    removeSubTaskOnClickHandle = e => {
        const newSubTaskIndex = e.target.dataset.index;
    
        const newSubTasks = this.state.newSubTasks;
        newSubTasks.splice(newSubTaskIndex,1);
        console.log(newSubTasks)
        this.setState({newSubTasks});
    };


    onInputChangeHandleEdit = e =>{//tracking the inputs of the edit form
        
        const editTask = this.state.editTask;
        editTask[e.target.id] = e.target.value;
        
        this.setState({editTask});
        
        
    }
    onInputChangeHandleSubTaskEdit = e =>{
        const editSubTask = this.state.editSubTask;
        editSubTask[e.target.id] = e.target.value;
        
        this.setState({editSubTask});
    }
    onEditTaskHandle = e => {//adding tasks
        e.preventDefault();
        const id=Number(e.target.dataset.id);
        const tasks = this.state.tasks;
        const index = tasks.findIndex(task => task.id===id);
        const editTasksSub=this.state.tasks[index].subTasks;
        tasks[index]=this.state.editTask;
        tasks[index].subTasks=editTasksSub;
        this.setState({tasks});
        alert('Task been edited successfully !!!');
        //this.resetEditFormHandle();
    };
    onEditSubTaskHandle=e=>{
        e.preventDefault();
        const taskID=Number(e.target.dataset.task);
        const tasks = this.state.tasks;
        const taskIndex = tasks.findIndex(task => task.id===taskID);
        const subTaskID=Number(e.target.dataset.id);
        console.log(taskIndex);
        // const subTasks = tasks[taskIndex].subTasks;
        // const subTaskIndex = subTasks.findIndex(subTask => subTask.id===subTaskID);
        
        // console.log(subTaskIndex);
        // const editTasksSub=this.state.tasks[taskIndex].subTasks;
        // editTasksSub[subTaskIndex]=this.state.editSubTask;

        // tasks[taskIndex].subTasks=editTasksSub;
        // this.setState({tasks});
        // alert('Sub Task been edited successfully !!!');
    }

    resetEditFormHandle = () =>{//resting the form
        const editTask ={
            id:Date.now(),
            title:'',
            description:'',
            date:'',
            subTasks :[
                
            ],
            details:false,
            subTasksDetails : false,
            isDone: false,
            editWindow: false
        };
        this.setState({editTask});
    }
    onInputChangeHandleAdd = e =>{//tracking the inputs of the add form
        
        const newTask = this.state.newTask;
        newTask[e.target.id] = e.target.value;
        
        this.setState({newTask});
        
        
    }

    resetFormHandle = () =>{//resting the form
        const newTask ={
            id:Date.now(),
            title:'',
            description:'',
            date:'',
            details:false,
            subTasksDetails : false,
            isDone: false,
            editWindow: false
        }
        const newSubTasks = [
            {

            id: Date.now(),
            title : ''
            }
        ];
        this.setState({newSubTasks});
        this.setState({newTask});
    }
    onAddTaskHandle = e => {//adding tasks
        e.preventDefault();
        let newTask = this.state.newTask;
        const newSubTasks = this.state.newSubTasks;
        newTask= {...newTask , subTasks :  newSubTasks};

        const tasks = [...this.state.tasks, newTask];
        
        this.setState({tasks});
        alert('Task been added successfully !!!');
        this.resetFormHandle();
    };
    taskDoneHandle = e =>{
       
        const id=Number(e.target.dataset.id);
        const tasks = this.state.tasks;
        // getting the target task
        const index = tasks.findIndex(task => task.id===id);
        //get the task's sub tasks
        const subTasks = tasks[index].subTasks;
        const newSubTasks =[...subTasks];
        for(let i=0;i<subTasks.length;i++){
            if(tasks[index].isDone){
                newSubTasks[i] = {...newSubTasks[i] , isDone : false };
            }else{
                newSubTasks[i] = {...newSubTasks[i] , isDone : true };
            }
            
        }
        const newTasks = [...tasks];
        newTasks[index] = {...newTasks[index] , isDone : !newTasks[index].isDone };
        newTasks[index] = {...newTasks[index] , subTasks : newSubTasks };
        this.setState({tasks : newTasks});
    }
    subTaskDoneHandle = e =>{
        
        
        const taskID=Number(e.target.dataset.task);
        const tasks = this.state.tasks;
        const taskIndex = tasks.findIndex(task => task.id===taskID);
        
        const subTaskID=Number(e.target.dataset.id);
        const subTasks = tasks[taskIndex].subTasks;
        const subTaskIndex = subTasks.findIndex(subTask => subTask.id===subTaskID);

        subTasks[subTaskIndex]={...subTasks[subTaskIndex], isDone : !subTasks[subTaskIndex].isDone};

        tasks[taskIndex]={...tasks[taskIndex],subTasks : subTasks};
        this.setState({tasks});
    }
    showTaskDetailsHandle = e =>{
       
        const id=Number(e.target.dataset.id);
        const tasks = this.state.tasks;
        const index = tasks.findIndex(task => task.id===id);
        const newTasks = [...tasks];
        newTasks[index] = {...newTasks[index] , details : !newTasks[index].details };
        this.setState({tasks : newTasks});
    }
    showSubTasksHandle = e =>{
       
        const id=Number(e.target.dataset.id);
        const tasks = this.state.tasks;
        const index = tasks.findIndex(task => task.id===id);
        const newTasks = [...tasks];
        newTasks[index] = {...newTasks[index] , subTasksDetails : !newTasks[index].subTasksDetails };
        this.setState({tasks : newTasks});
    }
    taskRemoveHandle = e =>{
        const id=Number(e.target.dataset.id);
        const tasks = this.state.tasks;
        const index = tasks.findIndex(task => task.id===id);
        tasks.splice(index,1);
        this.setState({tasks});
        
    }
    subTaskRemoveHandle = e =>{
        const taskID=Number(e.target.dataset.task);
        const tasks = this.state.tasks;
        const taskIndex = tasks.findIndex(task => task.id===taskID);
        
        const subTaskID=Number(e.target.dataset.id);
        const subTasks = tasks[taskIndex].subTasks;
        const subTaskIndex = subTasks.findIndex(subTask => subTask.id===subTaskID);

        subTasks.splice(subTaskIndex,1);

        tasks[taskIndex]={...tasks[taskIndex],subTasks : subTasks};
        this.setState({tasks});
    }
    
    
    render(){
        
        return (
            <Fragment>
                <layouts.Nav />
                <Switch>
                    <Route path="/user/profile">
                        <h1 className="m-5" style={{color : "#7952B3"}}>User name</h1>
                    </Route>
                    <Route path="/create-new-task">
                        <NewTaskForm  newSubTasks={this.state.newSubTasks} App={this}/>
                    </Route>
                    {/* <Route path="/test" exact>
                        <EditTask/>
                    </Route> */}
                    <Route path="/" exact>
                        <Tasklist tasks={this.state.tasks} App={this}/>
                    </Route>
                    
                </Switch>
                
                <div style={{height:"100px"}}></div>
                <layouts.Footer />
            </Fragment>
        );
    }
}
export default App;