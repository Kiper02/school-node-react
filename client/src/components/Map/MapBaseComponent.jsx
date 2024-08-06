import React, { useContext, useEffect, useState } from 'react';
import styles from './MapBase.module.css';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

import { Controls, MiniMap, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TaskComponent from './Task/TaskComponent';



const MapBaseComponent = () => {
    const { tasks } = useContext(Context);
    const [initialNodes, setInitialNodes] = useState([]);
    const [initialEdges, setInitialEdges] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const directions = [
        { x: 0, y: -1 }, // вверх
        { x: 0, y: 1 }, // вниз
        { x: -1, y: 0 }, // влево
        { x: 1, y: 0 } // вправо
    ];

    const xOffset = -800; // Сдвиг по оси X
    const yOffset = 420;  // Сдвиг по оси Y

    const calculatePosition = (parentPosition, index, nodeSize) => {
        const direction = directions[index % directions.length];
        const x = parentPosition.x + direction.x * nodeSize;
        const y = parentPosition.y + direction.y * nodeSize;
        return { x, y };
    };

    const buildGraph = (tasks) => {
        const nodes = [];
        const edges = [];

        const addNode = (task, position, parentId = null) => {
            nodes.push({
                id: String(task.id),
                type: 'customNode',
                position,
                data: { label: task.name }
            });

            if (parentId) {
                edges.push({
                    id: `e${parentId}-${task.id}`,
                    source: String(parentId),
                    target: String(task.id)
                });
            }

            const children = task.Dependencies || [];
            children.forEach((child, index) => {
                const childPosition = calculatePosition(position, index, 300);
                addNode(child, childPosition, task.id);
            });
        };

        tasks.forEach((task, index) => {
            const position = { x: index * 600 + xOffset, y: yOffset }; // Начальные позиции для корневых задач с учетом смещения
            addNode(task, position);
        });

        return { nodes, edges };
    };

    const fetchTasks = async () => {
        try {
            setIsLoading(true);
            const data = await tasks.getTasksAll();
            const { nodes, edges } = buildGraph(data.data);
            setInitialNodes(nodes);
            setInitialEdges(edges);
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const nodeTypes = {customNode: TaskComponent}

    return (
        <div className={styles.body}>
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
