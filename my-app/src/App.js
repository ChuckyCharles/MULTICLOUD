
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Settings from './pages/settings';
import Navbar from './components/navbar';
import './App.css'; // Global styles (optional)

// Main App component
const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar Component */}
        <Navbar />

        {/* Define Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />         {/* Home Page */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Page */}
          <Route path="/settings" element={<Settings />} />   {/* Settings Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Export the App component

