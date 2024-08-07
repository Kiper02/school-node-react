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

    const handleStarted = async () => {
        const data = await tasks.editTask(currentTask.id, 'Started');
    }

    


    return (
        <div 
            className={visible ? 'visible' : 'hidden'}
            onClick={stopPropagation}      
            >
                <h2 className='name'>{currentTask.name}</h2>
                <h4 className='desc'>
                    <b>Тема: </b>
                    {currentTask.description}
                </h4>
                <h4 className='exp'>
                    Опыт: {currentTask.exp}
                </h4>
                {
                    currentTask.status === 'Not Started'
                    ?  <button 
                    className='btn_add'
                    onClick={handleStarted}
                    >
                        Приступить
                    </button>
                    : <p>Вы приступили к задаче</p>
                }
                
                <h4 className='status'>{currentTask.status}</h4>
        </div>
    );
}

export default observer(Modal);
