import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <h2>Multi-Cloud Monitoring</h2>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '15px' }}>
        <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
        <li><Link to="/dashboard" style={{ color: '#fff' }}>Dashboard</Link></li>
        <li><Link to="/settings" style={{ color: '#fff' }}>Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
