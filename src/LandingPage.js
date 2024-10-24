import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const LandingPage = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Attendance System
          </h1>
          <p className="text-lg mb-12">
            Streamline your attendance management with our intelligent, 
            automated system designed for modern organizations.
          </p>
          <div className="cta-buttons">
            <Link to="/login" className="button">Login</Link>
            <Link to="/register" className="button">Register</Link>
          </div>
          {/* Feature list */}
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <h3>Smart Recognition</h3>
              <p>Advanced AI algorithms for accurate and fast attendance tracking</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⏱️</span>
              <h3>Real-time Tracking</h3>
              <p>Monitor attendance instantly with live updates and notifications</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security to protect your attendance data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
