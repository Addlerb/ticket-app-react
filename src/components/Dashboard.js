import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./assets/styles.css";

function Dashboard({ setAuth }) {
  const [stats, setStats] = useState({ totalTickets: 0, openTickets: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/tickets")
      .then((response) => {
        const tickets = response.data;
        setStats({
          totalTickets: tickets.length,
          openTickets: tickets.filter((t) => t.status === "open").length,
        });
      })
      .catch(() => toast.error("Failed to load stats"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    setAuth(false);
    navigate("/auth/login");
  };

  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>Total Tickets: {stats.totalTickets}</p>
      <p>Open Tickets: {stats.openTickets}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default Dashboard;
