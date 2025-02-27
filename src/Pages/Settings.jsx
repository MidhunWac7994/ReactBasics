import React, { useRef, useEffect } from 'react';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const datasetConfig = [
      { label: 'Dataset 1', borderColor: 'rgba(75, 192, 192, 1)', backgroundColor: 'rgba(75, 192, 192, 0.2)', data: [12, 19, 3, 5, 2, 3, 12, 16] },
      { label: 'Dataset 2', borderColor: 'rgba(153, 102, 255, 1)', backgroundColor: 'rgba(153, 102, 255, 0.2)', data: [10, 15, 25, 20, 15, 22, 18, 13] },
      { label: 'Dataset 3', borderColor: 'rgba(255, 159, 64, 1)', backgroundColor: 'rgba(255, 159, 64, 0.2)', data: [9, 17, 13, 8, 22, 18, 10, 15] },
    ];

    const datasets = datasetConfig.map(config => ({
      label: config.label,
      data: config.data,
      fill: true,
      borderColor: config.borderColor,
      backgroundColor: config.backgroundColor,
      pointBackgroundColor: config.borderColor,
      pointBorderColor: '#fff',
      tension: 0.1,
    }));

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'], // 8 months
        datasets: datasets, 
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Data Line Chart',
          },
          legend: {
            position: 'top',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Values',
            },
            beginAtZero: true, 
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas
        ref={chartRef}
        style={{
          width: '100px', 
          height: '100px', 
        }}      
      ></canvas>
    </div>
  );
};

export default LineChart;
                                      