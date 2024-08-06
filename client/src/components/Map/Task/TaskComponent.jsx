import React, { useContext } from 'react';
import styles from './Task.module.css'
import { Handle } from '@xyflow/react';


const TaskComponent = ({data, numEdges}) => {


    return (
        <div className={styles.wrapp}>
            <Handle className={styles.handle} type="target" position="left"/>
            <div className={styles.label}>{data.label}</div>
            <Handle className={styles.handle} type="source" position="right"  />
        </div>
    );
}

export default TaskComponent;
