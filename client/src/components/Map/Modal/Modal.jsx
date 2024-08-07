import React, { useContext } from 'react';
import './Modal.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';

const Modal = ({visible, task}) => {
    const {tasks} = useContext(Context)
    if(!visible || !task) return null
    const stopPropagation = (event) => {
        event.stopPropagation();
    }
    const currentTask = tasks.tasks.find(item => item.id == task.id)

    


    return (
        <div 
            className={visible ? 'visible' : 'hidden'}
            onClick={stopPropagation}      
            >
                <h2 className='name text'>{currentTask.name}</h2>
                <h4 className='desc text'>{currentTask.description}</h4>
                <h4 className='exp text'>{currentTask.exp}</h4>
                <button className='btn_add'>Приступить</button>
                <h4 className='status text'>{currentTask.status}</h4>
        </div>
    );
}

export default observer(Modal);
