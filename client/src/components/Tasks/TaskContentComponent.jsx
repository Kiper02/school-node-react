import React, { useContext, useEffect, useState } from 'react';
import styles from './TaskContent.module.css'
import { Context } from './../../index.js'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const TaskContentComponent = () => {
    const {tasks} = useContext(Context)
    const [active, setActive] = useState([]);
    const [ready, setReady] = useState([]);
    const navigate = useNavigate();
    
    const fetchTasks = async () => {
        await tasks.getTasksAll()
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    useEffect(() => {
        const activeTasks = tasks.tasks.filter(item => item.status === 'Started')
        setActive(activeTasks)

        const readyTasks = tasks.tasks.filter(item => item.status === 'Ready');
        setReady(readyTasks);
    }, [tasks.tasks])


    const navigateTask = (id) => {
        navigate(`/task/${id}`);
    }

    

    return (
        <div className={styles.wrapp}>
            <div className={styles.active}>
                <h1 className={styles.active_header}>В ходе выполнения: </h1>
                {active.map(item => 
                    <div key={item.id} className={styles.item}>
                        <p>{item.name}</p>
                        <button 
                            className={styles.btn}
                            onClick={() => navigateTask(item.id)}
                        >
                            Перейти
                        </button>
                    </div>
                    
                )}
            </div>
            <div className={styles.ready}>
                <h1 className={styles.ready_header}>Готовые задачи: </h1>
                {ready.map(item => 
                    <div key={item.id} className={styles.item}>
                    <p>{item.name}</p>
                    <button className={styles.btn}>Посмотреть результат</button>
                </div>
                )}
            </div>
        </div>
    );
}

export default observer(TaskContentComponent);
