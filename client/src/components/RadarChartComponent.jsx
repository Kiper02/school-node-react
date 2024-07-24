import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title, zoomPlugin);

const RadarChartComponent = () => {
  const data = {
    labels: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5', 'Skill 6'],
    datasets: [
      {
        label: 'Skill Levels',
        data: [50, 80, 30, 60, 50, 60],
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
          display: false, // отключить отображение угловых линий
        },
        ticks: {
          display: false, // отключить отображение меток
        },
        pointLabels: {
          display: true, // оставить метки по кругу (напротив каждого скилла)
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // установить цвет сетки, если требуется
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
            enabled: true, // включить масштабирование колесом мыши
          },
          pinch: {
            enabled: true, // включить масштабирование с помощью жестов (например, на сенсорных устройствах)
          },
          mode: 'xy',
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChartComponent;
