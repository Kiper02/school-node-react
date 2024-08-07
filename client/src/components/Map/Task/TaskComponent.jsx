import React from 'react';
import styles from './Task.module.css';
import { Handle } from '@xyflow/react';

const TaskComponent = ({ data }) => {
    const { label, numEdges } = data;
    return (
        <div className={styles.wrapp}>
            <Handle className={styles.target} type="target" position="bottom" />
            <Handle className={styles.source} type="source" position="top" />
            <div className={styles.label}>{label}</div>
        </div>
    );
};

export default TaskComponent;
