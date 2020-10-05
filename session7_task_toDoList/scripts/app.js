"use strict";

//tasks database
const tasks=[
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
];

//displaying all tasks
function displayAllTasks(){
    $('.allTasks').empty();
    for(let i=0;i<tasks.length;i++){
        tasks[i].id=i;    
        $('#allTasks').append(
                
                `<div class="task my-5 " >
                    <div class="task-header">
                        <h2  data-task-id="${tasks[i].id}" class="task-title pl-3 task-title " style="text-decoration:${tasks[i].isDone? 'line-through' : 'none'};">${tasks[i].title}</h2>
                        
                        <div class="task-edit-btns d-none">
                            <button data-task-id="${tasks[i].id}" class=" btn  btn-success edit  ${tasks[i].isDone? 'd-none' : ''}">Edit <i class="far fa-edit"></i></button>
                            <button data-task-id="${tasks[i].id}" class="btn done btn-${tasks[i].isDone?  'warning' : 'primary'}" >
                                ${ tasks[i].isDone? 'unDone <i class="fas fa-times"></i>' : 'Done <i class="fas fa-check"></i>' }
                            </button>
                            <button data-task-id="${tasks[i].id}" class="btn btn-danger remove ">Remove <i class="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <div class="task-details d-none">
                        <div class="task-description pt-3 pl-3 ">
                            <p data-task-id="${tasks[i].id}">${tasks[i].description}</p>
                            <div data-task-id="${tasks[i].id}" class="time pl-3">${tasks[i].time}</div>
                            <div data-task-id="${tasks[i].id}" class="date pl-3">${tasks[i].date}</div>
                        </div>
                        
                    </div>
                </div>`
        );
        if(tasks[i].editWindow==true){
            $('#allTasks').append(
                `<section class="edit-task my-5 " >
                <div class="container bg-dark">
                    
                    <!--<div data-task-id="${tasks[i].id}" id="closeEditTask" class="close mt-3 mr-3"><i class="fas fa-times"></i></div>-->
                    <br>
                    <div class="heading mt-5 ml-3">
                        <h1>Edit Task</h1>
                    </div>
                    <form class=" py-5  mx-3">
                        
                        <div class="form-group mt-2">
                            <input data-task-id="${tasks[i].id}" id="edit-task-title" class="form-control edit-task-title " type="text" placeholder="Task title">
                        </div>
                        <div class="form-group">
                            <textarea data-task-id="${tasks[i].id}" id="edit-task-description" class="form-control edit-task-description" id="exampleFormControlTextarea1" rows="3" placeholder="Task task-description"></textarea>
                        </div>
                        <div class="form-group ">
                            <input data-task-id="${tasks[i].id}" id="edit-task-time" class="form-control edit-task-time " type="text" placeholder="hh:mm">
                        </div>
                        <div class="form-group ">
                            <input data-task-id="${tasks[i].id}" id="edit-task-date" class="form-control edit-task-date " type="text" placeholder="dd/mm/yyyy">
                        </div>               
                        <button data-task-id="${tasks[i].id}" id="editTask" class="btn btnAdd ">edit task <i class="far fa-edit"></i></button>
                    </form>
                   
                </div>
            </section>`
            );
        }
    }
    $('#allTasks').append(
        `<button id="addNewTaskWindow" class="btn btnAdd addTask " style="width: 500px;">add new task <i class="fas fa-thumbtack pl-1"></i></button>`
    );
}
//reset add new task window
function resetAddWindow() {
    $('input#new-task-title').val('');
    $('textarea#new-task-description').val('');
    $('input#new-task-time').val('');
    $('input#new-task-date').val('');
}
//adding new task
function addNewTaskWindow(){
    
    const newTaskId=tasks.length;
    $('.newTaskWindow').empty();
    $('.newTaskWindow').append(
        `            <div id="closeAddTask" class="close mt-3 mr-3"><i class="fas fa-times"></i></div>
        <br>
        <div class="heading mt-5 ml-3 ">
            <h1>New Task</h1>
        </div>
        <form class=" py-5  mx-3">
            
            <div class="form-group mt-2">
                <input data-task-id="${newTaskId}" class="form-control  " id="new-task-title" type="text" placeholder="Task title">
            </div>
            <div class="form-group">
                <textarea data-task-id="${newTaskId}" class="form-control " id="new-task-description" rows="3" placeholder="Task task-description"></textarea>
            </div>
            <div class="form-group ">
                <input data-task-id="${newTaskId}" class="form-control  " id="new-task-time" type="text" placeholder="hh:mm">
            </div>
            <div class="form-group ">
                <input data-task-id="${newTaskId}" class="form-control  " id="new-task-date" type="text" placeholder="dd/mm/yyyy">
            </div>               
            <button data-task-id="${newTaskId}" id="addTask" class="btn btnAdd addTask">add new task <i class="fas fa-thumbtack pl-1"></i></button>
        </form>`
    );
}
function addNewTask(){
    debugger;
    const newTaskIndex=$(this).data('task-id');
    const newTask = {
        
        id: tasks.length ,
        title: $('input#new-task-title').val(),
        description: $('textarea#new-task-description').val(),
        time: $('input#new-task-time').val(),
        date:$('input#new-task-date').val(),
        isDone: false,
        editWindow:false
    };
    tasks.push(newTask);
    //console.log(newTaskIndex);
    
    displayAllTasks();
    console.log(newTask);
}
//editing task
function saveEdit(){
    //debugger;
    const taskIndex=$(this).data('task-id');
    
    const editedTask = {
        
        id: Number(taskIndex) ,
        title: $('input#edit-task-title').val(),
        description: $('textarea#edit-task-description').val(),
        time: $('input#edit-task-time').val(),
        date:$('input#edit-task-date').val(),
        isDone: false,
        editWindow:false
    };
    tasks[Number(taskIndex)]=editedTask;
    
    displayAllTasks();
}
function showEditWindow(){
    const taskIndex=$(this).data('task-id');
    tasks[Number(taskIndex)].editWindow=!tasks[Number(taskIndex)].editWindow;
    displayAllTasks();
}
//button handles
function doneHandle() {
    const targetItem = $(this).data('task-id');
    tasks[Number(targetItem)].isDone=!tasks[Number(targetItem)].isDone;
    
    displayAllTasks();
}
function removeHandle() {
    const targetItem = $(this).data('task-id');
    tasks.splice(targetItem,1);
    
    displayAllTasks();
}

//task buttons event
$(document).on('click','.done',doneHandle);//done || unDone
$(document).on('click','.remove',removeHandle);// remove task
$(document).on('click','.edit',showEditWindow);// show|unShow Edit Window task
//edit task event
$(document).on('click','#editTask',saveEdit);// save edit changes in task

//toggle on and off task-details
$(document).on('click', '.task-header', function () {                       //toggle on and off the task descripton and buttons
    $(this).nextAll('.task-details').toggleClass('d-none');
    $(':nth-child(1)' ,this).nextAll('.task-edit-btns').toggleClass('d-none');
});
//adding new task events
$(document).on('click','#addNewTaskWindow',addNewTaskWindow);
$(document).on('click','#addTask',addNewTask);
//$(document).on('click','#addTask',addNewTask);
$(document).on('click','#closeAddTask',function(){
    $('.newTaskWindow').empty();
});

$(function () { 
    
    displayAllTasks();
    
    
});