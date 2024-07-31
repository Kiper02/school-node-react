import React, { useContext } from 'react';
import styles from './Task.module.css'


const TaskComponent = ({name, type, description}) => {


    return (
        <div className={styles.wrapp}>
            <div className={styles.heading}>
                <p>{name}</p>
                <p>{description}</p>
                <p>{type}</p>
            </div>        
        </div>
    );
}

export default TaskComponent;
