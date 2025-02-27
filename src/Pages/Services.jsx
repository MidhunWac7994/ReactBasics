import React, { useRef, useEffect } from 'react';
import { Chart, RadialLinearScale, CategoryScale, LineElement, Filler } from 'chart.js';

Chart.register(RadialLinearScale, CategoryScale, LineElement, Filler);

const RadarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55],
            fill: true,
            backgroundColor: 'rgba(200, 200, 255, 0.2)',
            borderColor: 'rgba(200, 200, 255, 1)',
            pointBackgroundColor: 'rgba(200, 200, 255, 1)',
            pointBorderColor: '#fff',
          },
        ],
      },
       options: {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 0,  
            suggestedMax: 100,
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
    <div style={{ width: '700px', height: '700px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RadarChart;
