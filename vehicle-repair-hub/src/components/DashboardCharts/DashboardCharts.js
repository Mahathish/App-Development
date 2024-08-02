import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const recentIssuesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Issues Reported',
      data: [10, 15, 8, 20, 12, 5],
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      borderWidth: 2,
      fill: true,
    },
  ],
};

const partsUsedData = {
  labels: ['Oil Filter', 'Air Filter', 'Brake Pads', 'Tires', 'Battery'],
  datasets: [
    {
      label: 'Parts Used',
      data: [50, 40, 35, 60, 25],
      backgroundColor: '#007bff',
      borderColor: '#0056b3',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: ${context.raw}`;
        },
      },
    },
  },
};

const DashboardCharts = () => {
  return (
    <div className="dashboard-charts">
      <div className="chart-container">
        <h2>Recent Issues Reported</h2>
        <Line data={recentIssuesData} options={options} />
      </div>
      <div className="chart-container">
        <h2>Parts Used</h2>
        <Bar data={partsUsedData} options={options} />
      </div>
    </div>
  );
};

export default DashboardCharts;
