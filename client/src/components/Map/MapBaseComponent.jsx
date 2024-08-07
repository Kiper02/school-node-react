import React, { useState } from 'react';
import styles from './MapBase.module.css';
import { observer } from 'mobx-react-lite';
import { Controls, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TaskComponent from './Task/TaskComponent';
import useFetchTasks from '../../hooks/MapHooks/useFetchTask';
import Modal from './Modal/Modal';

const MapBaseComponent = () => {
    const { initialNodes, initialEdges, isLoading } = useFetchTasks();
    const [show, setShow] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null)
    
    const modal = (event, label) => {
        event.stopPropagation()
        const task = initialNodes.find(node => node.data.label === label)
        setSelectedTask(task)
        setShow(true);
    };
    
    const hidden = () => {
        setShow(false);
        setSelectedTask(null)
    };
    const nodeTypes = { customNode: (nodeProps) => <TaskComponent {...nodeProps} modal={modal}/> };


    return (
        <div className={styles.body} onClick={hidden}>
            <Modal visible={show} nodes={initialNodes} task={selectedTask}/>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                initialNodes.length > 0 && initialEdges.length > 0 ? (
                    <div style={{ width: '100vw', height: '100vh' }}>
                        <ReactFlow 
                            nodes={initialNodes} 
                            edges={initialEdges} 
                            nodeTypes={nodeTypes}
                        >
                            <Controls />
                        </ReactFlow>
                    </div>
                ) : (
                    <div>No data available</div>
                )
            )}
        </div>
    );
};

export default observer(MapBaseComponent);
