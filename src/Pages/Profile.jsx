import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const PieCharts = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);

  useEffect(() => {
    const ctx1 = chartRef1.current.getContext('2d');
    const ctx2 = chartRef2.current.getContext('2d');

    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }
    if (chartInstance2.current) {
      chartInstance2.current.destroy();   
    }

    chartInstance1.current = new Chart(ctx1, {
      type: 'pie', 
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange'], 
        datasets: [
          {
            data: [300, 50, 100, 150, 75],
            backgroundColor: ['#FF0000', '#0000FF', '#FFFF00', '#008000', '#FFA500'],
            borderColor: '#fff',
            borderWidth: 2,
          },   
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
            },    
          },
          legend: {
            position: 'top',
          },
        },
      },
    });

    chartInstance2.current = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue'], 
        datasets: [
          {
            data: [500, 150],
            backgroundColor: ['#FF0000', '#0000FF'],
            borderColor: '#fff',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
            },
          },
          legend: {
            position: 'top',
          },
        },
      },
    });      

    return () => {
      if (chartInstance1.current) {
        chartInstance1.current.destroy();
      }
      if (chartInstance2.current) {
        chartInstance2.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <div style={{ width: '300px', height: '300px' }}>
        <h3>Normal Pie Chart</h3>
        <canvas ref={chartRef1}></canvas>
      </div>
      <div style={{ width: '300px', height: '300px' }}>
        <h3>Pie Chart with Decimation</h3>
        <canvas ref={chartRef2}></canvas>
      </div>
    </div>
  );
};

export default PieCharts;
