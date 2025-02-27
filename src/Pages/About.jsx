import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MultiChartPage = () => {
  const staticTempData = [30, 32, 28, 33, 35, 31, 29, 34];

  const [ecgData, setEcgData] = useState([50]);

  const staticTempOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Static Temperature Data",
      },  
      tooltip: {
        callbacks: {
          label: (context) => `Temperature: ${context.raw}°C`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (Months)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
        beginAtZero: true,
      },
    },
  };

  const ecgOptions = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "ECG-like Value",
        },
        min: 0,
        max: 100,
      },
    },
  };

  const staticTempDataChart = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Monthly Temperature (°C)",
        data: staticTempData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const ecgDataChart = {
    labels: Array.from(
      { length: ecgData.length },
      (_, index) => `Time ${index + 1}`
    ),
    datasets: [
      {
        label: "ECG-like Data",
        data: ecgData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEcgData((prevData) => [
        ...prevData,
        Math.floor(Math.random() * (90 - 10 + 1)) + 10,
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Temperature and ECG-like Progressive Line Charts</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ width: "45%" }}>
          <h3>Static Temperature Data</h3>
          <Line data={staticTempDataChart} options={staticTempOptions} />
        </div>

        <div style={{ width: "45%" }}>
          <h3>ECG-like Data (Progressive)</h3>
          <Line data={ecgDataChart} options={ecgOptions} />
        </div>
      </div>
    </div>
  );
};

export default MultiChartPage;
