import React from 'react';
import './dashboard.css'; // Import the CSS file for Dashboard styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-description">
        Here you can monitor the status of your multi-cloud services.
      </p>
    </div>
  );
};

// Corrected export statement
export default Dashboard;