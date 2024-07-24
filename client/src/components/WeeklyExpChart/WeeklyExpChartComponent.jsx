import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';
import styles from './WeeklyExpChart.module.css'

// Регистрация компонентов, необходимых для создания линейного графика
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const getCurrentWeekDays = () => {
    const days = [];
    const current = new Date();
    const firstDay = current.getDate() - current.getDay();
    for (let i = 0; i < 7; i++) {
        const day = new Date(current.setDate(firstDay + i));
        days.push(day.toLocaleDateString('ru', { weekday: 'long' }));
    }
    return days;
};

const WeeklyExpChartComponent = ({ expData }) => {
    const daysOfWeek = getCurrentWeekDays();
    const data = {
        labels: daysOfWeek,
        datasets: [
            {
                label: 'Ежедневный опыт',
                data: expData,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Дни недели'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Опыт(exp)'
                }
            }
        }
    };

    return (
        <div className={styles.wrapp}>
            <Line data={data} options={options} />
        </div>        
    );
}

export default WeeklyExpChartComponent;
