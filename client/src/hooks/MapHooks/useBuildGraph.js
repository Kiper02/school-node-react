import { directions } from '../../utils/consts';

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

export default buildGraph;
