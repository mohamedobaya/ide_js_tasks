import React, {Component, Fragment ,useState} from 'react';
import '../assets/sass/app.scss';
import layouts from '../pages';
import Tasklist from '../components/tasks/TaskList';
import NewTaskForm from './tasks/NewTaskForm';
import EditTask from './tasks/EditTaskWindow';
import { faCreativeCommonsPd } from '@fortawesome/free-brands-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



class App extends Component{
    state={
        tasks :[
            {
                id:0,
                title:'Task 1',
                description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aspernatur at rerum et in incidunt nostrum dolorum est aliquid ipsam possimus sed esse eius quo veniam iure, exercitationem, aut dolorem.',
                date:'19/12/2020',
                details:true,
                isDone: true,
                editWindow: false
            },
            {
                id:1,
                title:'Task 2',
                description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aspernatur at rerum et in incidunt nostrum dolorum est aliquid ipsam possimus sed esse eius quo veniam iure, exercitationem, aut dolorem.',
                date:'21/12/2020',
                details:true,
                isDone: false,
                editWindow: false
            },
            {
                id:2,
                title:'Task 3',
                description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aspernatur at rerum et in incidunt nostrum dolorum est aliquid ipsam possimus sed esse eius quo veniam iure, exercitationem, aut dolorem.',
                date:'01/01/2021',
                details:true,
                isDone: false,
                editWindow: false
            }
        ],
        newTask : {
            id:Date.now(),
            title:'',
            description:'',
            date:'',
            details:false,
            isDone: false,
            editWindow: false
        },
        editTask : {
            id:Date.now(),
            title:'',
            description:'',
            date:'',
            details:false,
            isDone: false,
            editWindow: false
        },
        editWindow : false
    };
    onInputChangeHandleEdit = e =>{//tracking the inputs of the edit form
        
        const editTask = this.state.editTask;
        editTask[e.target.id] = e.target.value;
        
        this.setState({editTask});
        
        
    }
    onEditTaskHandle = e => {//adding tasks
        e.preventDefault();
        const id=e.target.dataset.id;
        console.log(id);
        const tasks = this.state.tasks;
        const index = tasks.findIndex(task => task.id==id);
        console.log(index);
        console.log(tasks);
        tasks[index]=this.state.editTask;
        console.log(tasks);
        this.setState({tasks});
        alert('Task been edited successfully !!!');
        this.resetEditFormHandle();
    };
    resetEditFormHandle = () =>{//resting the form
        const editTask ={
            id:Date.now(),
            title:'',
            description:'',
            date:'',
            isDone: false,
            editWindow: false
        }
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
            isDone: false,
            editWindow: false
        }
        this.setState({newTask});
    }
    onAddTaskHandle = e => {//adding tasks
        e.preventDefault();
        const tasks = [...this.state.tasks, this.state.newTask];
        
        this.setState({tasks});
        alert('Task been added successfully !!!');
        this.resetFormHandle();
    };
    taskDoneHandle = e =>{
       
        const id=e.target.dataset.id;
        const tasks = this.state.tasks;
        
        // for(let i=0;i<tasks.length;i++){
        //     console.log(id);
        //     if(tasks[i].id==id){
        //         tasks[i].isDone=!tasks[i].isDone;
        //     }
        // }
        
        //or 
        
        const index = tasks.findIndex(task => task.id==id);
        const newTasks = [...tasks];
        newTasks[index] = {...newTasks[index] , isDone : !newTasks[index].isDone };
        this.setState({tasks : newTasks});
    }
    showTaskDetailsHandle = e =>{
       
        const id=e.target.dataset.id;
        const tasks = this.state.tasks;
        const index = tasks.findIndex(task => task.id==id);
        const newTasks = [...tasks];
        newTasks[index] = {...newTasks[index] , details : !newTasks[index].details };
        this.setState({tasks : newTasks});
    }
    taskRemoveHandle = e =>{
        const id=e.target.dataset.id;
        const tasks = this.state.tasks;
        const index = tasks.findIndex(task => task.id==id);
        tasks.splice(index,1);
        this.setState({tasks});
        
    }
    taskEditHandle = e =>{
        const id=e.target.dataset.id;
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
                        <NewTaskForm App={this}/>
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