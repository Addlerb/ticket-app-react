import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import TicketManagement from "./components/TicketManagement";
import "./assets/styles.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("ticketapp_session")
  );

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) return <Navigate to="/auth/login" />;
    return children;
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="hero">
        {" "}
        {/* Add this to apply background globally */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/auth/login"
            element={<Login setAuth={setIsAuthenticated} />}
          />
          <Route
            path="/auth/signup"
            element={<Signup setAuth={setIsAuthenticated} />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard setAuth={setIsAuthenticated} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tickets"
            element={
              <ProtectedRoute>
                <TicketManagement />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
