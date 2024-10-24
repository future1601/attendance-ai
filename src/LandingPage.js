import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 mb-6">
            AI Attendance System
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Streamline your attendance management with our intelligent, 
            automated system designed for modern organizations.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/login"
              className="button login" /* Apply button styles */
            >
              Login
              <span className="ml-2"></span>
            </Link>
            <Link 
              to="/register"
              className="button register" /* Apply button styles */
            >
              Register
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4 text-2xl text-indigo-600">
              👥
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Recognition</h3>
            <p className="text-gray-600">
              Advanced AI algorithms for accurate and fast attendance tracking
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4 text-2xl text-indigo-600">
              ⏰
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
            <p className="text-gray-600">
              Monitor attendance instantly with live updates and notifications
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4 text-2xl text-indigo-600">
              🔒
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">
              Enterprise-grade security to protect your attendance data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
