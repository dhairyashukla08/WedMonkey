import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      <div className="toggle-buttons">
        <button onClick={toggleForm} className={isLogin ? 'active' : ''}>Login</button>
        <button onClick={toggleForm} className={!isLogin ? 'active' : ''}>Signup</button>
      </div>

      {isLogin ? (
        <form className="form-container">
          <h2>Login</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form className="form-container">
          <h2>Signup</h2>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Address" required />
          <button type="submit">Signup</button>
        </form>
      )}
    </div>
  );
};

export default LoginSignup;
