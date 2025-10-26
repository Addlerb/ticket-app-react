import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./assets/styles.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero">
        <div className="circle" style={{ top: "20px", right: "20px" }}></div>
        <h1>TicketMaster</h1>
        <p>Manage your tickets with ease!</p>
        <button onClick={() => navigate("/auth/login")}>Login</button>
        <button onClick={() => navigate("/auth/signup")}>Get Started</button>
      </section>
      <section className="card">
        <h2>Features</h2>
        <p>Track, manage, and resolve tickets seamlessly.</p>
      </section>
      <Footer />
    </div>
  );
}
export default Landing;
