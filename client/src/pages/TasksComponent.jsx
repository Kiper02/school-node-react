import React from 'react';
import NavBarComponent from '../components/NavBar/NavBarComponent';
import TaskContentComponent from '../components/Tasks/TaskContentComponent';

const TasksComponent = () => {
    return (
        <div>
            <NavBarComponent />
            <TaskContentComponent />
        </div>
    );
}

export default TasksComponent;
