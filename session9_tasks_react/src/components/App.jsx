import React , {Component,Fragment}from 'react';
import Header from './layouts/header';
import TaskList from './tasks/task-list';
import AddTask from './tasks/newTaskWindow';

export class App extends Component {
    //state
    
    state={
        tasks:[
            {
                id:0,
                title:'Task 1',
                description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aspernatur at rerum et in incidunt nostrum dolorum est aliquid ipsam possimus sed esse eius quo veniam iure, exercitationem, aut dolorem.',
                time: '09:10',
                date:'19/12/2020',
                isDone: true,
                editWindow: false
            },
            {
                id:1,
                title:'Task 2',
                description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aspernatur at rerum et in incidunt nostrum dolorum est aliquid ipsam possimus sed esse eius quo veniam iure, exercitationem, aut dolorem.',
                time: '13:10',
                date:'21/12/2020',
                isDone: false,
                editWindow: false
            },
            {
                id:2,
                title:'Task 3',
                description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aspernatur at rerum et in incidunt nostrum dolorum est aliquid ipsam possimus sed esse eius quo veniam iure, exercitationem, aut dolorem.',
                time: '02:10',
                date:'01/01/2021',
                isDone: false,
                editWindow: false
            }
        ],
        isAddNewTaskWindow : false,
        newTask : {
                title:'',
                description:'',
                time: '',
                date:'',
                isDone: false,
                editWindow: false
        }
    };
    //get tasks length : ask instructor for an optimal way
    //events
    addNewTaskWindowHandle =()=>{
        this.setState({isAddNewTaskWindow:!this.state.isAddNewTaskWindow});
    };
    onChangeHandle = e => {  
        const newTask = this.state.newTask;

        newTask[e.target.id] = e.target.value;
        console.log(newTask);
        this.setState({newTask});
    };

    AddTaskHandle = e=>{
        e.preventDefault();
        const tasks = [...this.state.tasks, this.state.newTask];
        this.setState({tasks});
        this.addNewTaskWindowHandle();

    };
    //page render
    render(){
        return (
            <Fragment>
                <Header />
                <TaskList tasks={this.state.tasks}/>
                <AddTask isAddNewTaskWindow={this.state.isAddNewTaskWindow} App={this}/>
            </Fragment>
        );
    }

}

export default App;