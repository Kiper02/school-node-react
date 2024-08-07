import { useState, useEffect, useContext } from 'react';
import { Context } from '../../index';
import buildGraph from './useBuildGraph'; 

const useFetchTasks = () => {
    const { tasks } = useContext(Context);
    const [initialNodes, setInitialNodes] = useState([]);
    const [initialEdges, setInitialEdges] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    return { initialNodes, initialEdges, isLoading };
};

export default useFetchTasks;
