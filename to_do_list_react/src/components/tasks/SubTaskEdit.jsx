import React ,{useState}from 'react';
import { Modal,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave} from '@fortawesome/free-solid-svg-icons';

export function SubTaskEdit({taskID,subTask,App}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    //console.log(taskID);

    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Edit <FontAwesomeIcon icon={faEdit}/>
        </Button>
        
        <Modal className="edit-popup " show={show} onHide={handleClose}>
          <Modal.Header closeButton>
                <Modal.Title>Edit <span className="task-title">{subTask.title}</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="edit-task-form   mx-3" >
                <div className="form-group mt-2">
                    <input className="form-control"
                    id="title" type="text"  
                    placeholder={subTask.title}
                    value={App.state.editSubTask.title}
                    data-id={subTask.id}
                    data-task={taskID}
                    onChange={App.onInputChangeHandleSubTaskEdit} />
                </div>             
                <button type="button" data-id={subTask.id} data-task={taskID} className="btn addTask" onClick={App.onEditSubTaskHandle} >Save Edit <FontAwesomeIcon icon={faSave}/> </button>
            </form>
            
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  
 export default SubTaskEdit;
