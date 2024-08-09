import React, { useContext, useEffect, useState } from 'react';
import styles from './Task.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import CodeEditor from './CodeEditor/CodeEditor';

const Task = () => {
    const {id} = useParams()
    const [task, setTask] = useState(null);
    const [type, setTypes] = useState('');
    const {tasks} = useContext(Context)
    const navigate = useNavigate();

    const fetchTasks = async() => {
        await tasks.getTasksAll();
        await tasks.typeAll();
    }

    useEffect(() => {
        fetchTasks();
    }, [])


    useEffect(() => {
        const currentTask = tasks.tasks.find(item => item.id == id)
        setTask(currentTask);

        
    }, [tasks.tasks, id])

    useEffect(() => {
        if(task) {
            const currentType = tasks.types.find(item => item.id === task.type_id)
            setTypes(currentType)
        }
    }, [task, tasks.types])

    const navigateTheory = () => {
        navigate(`/task/${id}/theory`)
    }

    return (
        <div className={styles.wrapp}>
            {task ? (
                <div className={styles.content_wrapp}>
                    <div className={styles.headers}>
                        <h1 className={styles.header}>{task?.name}</h1>
                        <p className={styles.thematic}>Тема: {task?.description}</p>
                        {type?.name 
                            ? <p>Скилл: {type?.name}</p>
                            : <p>Loading...</p>
                        }
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
                        <CodeEditor type={type?.name || 'javascript'} />
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
