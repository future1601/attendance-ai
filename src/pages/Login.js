import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="auth-container flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header with Link, no underline or color change */}
      <div className="w-full text-center mb-8">
        <Link to="/" className="text-4xl font-bold text-indigo-900">
          AIATTEND
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
      <form onSubmit={handleLogin} className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-4 p-2 border rounded"
        />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-4">
          Login
        </button>
      </form>
      <div className="footer-links mb-4">
        <Link to="/register" className="text-indigo-600 hover:underline">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
