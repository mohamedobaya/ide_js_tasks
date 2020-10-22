import React ,{useState}from 'react';
import { Modal,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave} from '@fortawesome/free-solid-svg-icons';

export function EditTask({task,App}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Edit <FontAwesomeIcon icon={faEdit}/>
        </Button>
        
        <Modal className="edit-popup " show={show} onHide={handleClose}>
          <Modal.Header closeButton>
                <Modal.Title>Edit <span className="task-title">{task.title}</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="edit-task-form   mx-3" >
                <div className="form-group mt-2">
                    <input className="form-control"
                    id="title" type="text"  
                    placeholder={task.title}
                    value={App.state.editTask.title}
                    data-id={task.id}
                    onChange={App.onInputChangeHandleEdit} />
                </div>
                <div className="form-group">
                    <textarea className="form-control " 
                    id="description" 
                    rows="3"  
                    placeholder={task.description}
                    value={App.state.editTask.description}
                    data-id={task.id}
                    onChange={App.onInputChangeHandleEdit} />
                </div>
               <div className="form-group ">
                    <input className="form-control  "
                     id="date" type="text"  
                     placeholder={task.date}
                     value={App.state.editTask.date}
                     data-id={task.id}
                     onChange={App.onInputChangeHandleEdit}  />
                </div>               
                <button type="button" data-id={task.id} className="btn addTask" onClick={App.onEditTaskHandle} >Save Edit <FontAwesomeIcon icon={faSave}/> </button>
            </form>
            
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  
 export default EditTask;
