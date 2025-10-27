import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/styles.css";

function Login({ setAuth }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.email === "addlerb@hng.com" &&
      credentials.password === "password123"
    ) {
      localStorage.setItem("ticketapp_session", "true");
      setAuth(true);
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="hero">
      <div className="login-container">
        <div className="login-card">
          <h2>Welcome to Ticket Master</h2>
          <p className="login-subtitle">Unlock your ticket management power</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              required
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
              className="input-field"
            />
            <button type="submit" className="login-btn">
              Please Login
            </button>
          </form>
        </div>
      </div>
      <div className="wave-section"></div>
    </div>
  );
}

export default Login;
