import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData || userData === 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch (error) {
      console.error('Failed to parse user data:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>AR Visio Dashboard</h1>
          <div className="user-info">
            <span>Welcome, {user.username}!</span>
            <button onClick={handleLogout} className="btn-logout">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <h2>Welcome to AR Visio</h2>
          <p>Your AR visualization platform is ready to use.</p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>3D Objects</h3>
              <p>Browse and explore 3D objects</p>
            </div>
            <div className="feature-card">
              <h3>AR View</h3>
              <p>View objects in augmented reality</p>
            </div>
            <div className="feature-card">
              <h3>Customize</h3>
              <p>Personalize your AR experience</p>
            </div>
            <div className="feature-card">
              <h3>Save</h3>
              <p>Save your configurations</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
