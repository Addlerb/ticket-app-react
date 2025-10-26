import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./assets/styles.css";

function TicketManagement() {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/tickets")
      .then((response) => setTickets(response.data))
      .catch(() => toast.error("Failed to load tickets"));
  }, []);

  const handleAdd = () => {
    axios
      .post("http://localhost:3000/tickets", newTicket)
      .then((response) => {
        setTickets([...tickets, response.data]);
        setNewTicket({ title: "", description: "", status: "open" });
        toast.success("Ticket added!");
      })
      .catch(() => toast.error("Failed to add ticket"));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/tickets/${id}`)
      .then(() => {
        setTickets(tickets.filter((t) => t.id !== id));
        toast.success("Ticket deleted!");
      })
      .catch(() => toast.error("Failed to delete ticket"));
  };

  return (
    <div className="card">
      <h2>Ticket Management</h2>
      <div>
        <input
          placeholder="Title"
          value={newTicket.title}
          onChange={(e) =>
            setNewTicket({ ...newTicket, title: e.target.value })
          }
        />
        <input
          placeholder="Description"
          value={newTicket.description}
          onChange={(e) =>
            setNewTicket({ ...newTicket, description: e.target.value })
          }
        />
        <button onClick={handleAdd}>Add Ticket</button>
      </div>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.title} - {ticket.description} [{ticket.status}]
            <button onClick={() => handleDelete(ticket.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TicketManagement;
