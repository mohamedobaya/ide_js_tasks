import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

import { Link,NavLink } from 'react-router-dom';

export const Nav = ()=>(
    <nav className="navbar navbar-expand-lg  bg-dark ">
        <div className="myNav d-flex justify-content-between">
            <Link className="navbar-brand ml-5" to="/"><FontAwesomeIcon icon={faTasks} /> My ToDo app </Link >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mr-0" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                    <NavLink className="nav-link" to="/" exact><div className="test">All Tasks</div></NavLink >
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/create-new-task"><div className="test">Creat New Task</div></NavLink >
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/user/profile"><div className="test">User</div></NavLink >
                    </li>
                   
                    
                </ul>
            </div>
        </div>
    </nav>
);
export default Nav;