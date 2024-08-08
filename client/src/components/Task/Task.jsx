import React, { useContext, useEffect, useState } from 'react';
import styles from './Task.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const Task = () => {
    const {id} = useParams()
    const [task, setTask] = useState(null);
    const {tasks} = useContext(Context)
    const navigate = useNavigate();

    const fetchTasks = async() => {
        await tasks.getTasksAll();
    }

    useEffect(() => {
        fetchTasks();
    }, [])


    useEffect(() => {
        const currentTask = tasks.tasks.find(item => item.id == id)
        setTask(currentTask);
    }, [tasks.tasks, id])

    const navigateTheory = () => {
        navigate(`/task/${id}/theory`)
    }

    return (
        <div className={styles.wrapp}>
            {task ? (
                <div className={styles.content_wrapp}>
                    <div className={styles.headers}>
                        <h1 className={styles.header}>{task.name}</h1>
                        <p className={styles.thematic}>Тема: {task.description}</p>
                        <button 
                            className={styles.btn}
                            onClick={navigateTheory}
                        >
                            Теория
                        </button>
                    </div>
                    <div className={styles.desc}>
                        <h1>Задача</h1>
                        <p className={styles.task}>{task.text}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
            <p></p>
        </div>
    );
}

export default observer(Task);
