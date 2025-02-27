// src/pages/BarChartPage.jsx
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartPage = () => {
  const initialData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Sales (in INR)",
        data: [
          90000, 112000, 135000, 97500, 120000, 150000, 165000, 157500, 142500,
          172500, 187500, 202500,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const [data, setData] = useState(initialData);
  const incrementData = (index) => {
    const updatedData = { ...data };
    updatedData.datasets[0].data[index] += 5000;
    setData(updatedData);
  };

  const decrementData = (index) => {
    const updatedData = { ...data };
    if (updatedData.datasets[0].data[index] > 0) {
      updatedData.datasets[0].data[index] -= 5000;
      setData(updatedData);
    }
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales Data (in INR)",
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales (in INR)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Monthly Sales Bar Chart (in INR)</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        {data.labels.map((month, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "120px",
              padding: "10px",
              border: "2px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h4>{month}</h4>
            <div style={{ margin: "10px 0", fontSize: "18px" }}>
              ₹{data.datasets[0].data[index].toLocaleString()}
            </div>
            <div>
              <button
                onClick={() => incrementData(index)}
                style={{
                  padding: "5px 10px",
                  margin: "5px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                ↑
              </button>
              <button
                onClick={() => decrementData(index)}
                style={{
                  padding: "5px 10px",
                  margin: "5px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                ↓
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "40px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartPage;
