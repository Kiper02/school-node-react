import React, { useContext, useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Context } from '../../index';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title, zoomPlugin);

const RadarChartComponent = () => {
    const [types, setTypes] = useState([]);
    const { tasks } = useContext(Context);

    const fetchTypes = async () => {
        try {
            const response = await tasks.typeAll();
            if (response && response.data) {
                setTypes(response.data.map(item => item.name)); // Предполагаем, что в данных есть свойство name
            } else {
                console.error("No data found in response");
            }
        } catch (error) {
            console.error("Error fetching types:", error);
        }
    }

    useEffect(() => {
        fetchTypes();
    }, []); // Зависимости не включают types, чтобы избежать бесконечного цикла

    const data = {
        labels: types,
        datasets: [
            {
                label: 'Уровень скиллов',
                data: [50, 80, 30, 60, 50], // Пример данных, которые можно обновить в зависимости от типов
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
                pointLabels: {
                    display: true,
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
        },
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'xy',
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: 'xy',
                },
            },
        },
    };

    return <Radar data={data} options={options} />;
};

export default RadarChartComponent;
