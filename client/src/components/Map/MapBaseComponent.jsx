import React, { useContext, useEffect, useState } from 'react';
import styles from './MapBase.module.css'
import TaskComponent from './Task/TaskComponent';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const MapBaseComponent = () => {
    const {tasks} = useContext(Context)
    

    const fetchTasks = async() => {
        const data = await tasks.getTasksAll();
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    
    



    return (
        <div className={styles.body}>
            {tasks.tasks.map(item =>
                <TaskComponent 
                    key={item.id}
                    task={item}
                />
            )}
        </div>
    );
}

export default observer(MapBaseComponent);
