import { useNavigate } from "react-router-dom";
import "../assets/styles.css";

function Landing() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth/login");
  };

  const handleGetStartedClick = () => {
    navigate("/auth/signup");
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="decorative-circle left-circle"></div>
        <div className="content-wrapper">
          <h1>Ticket Master</h1>
          <p className="description">
            Manage your tickets effortlessly with our sleek and powerful app!
          </p>
          <div className="cta-buttons">
            <button onClick={handleLoginClick} className="login-btn">
              Login
            </button>
            <button onClick={handleGetStartedClick} className="get-started-btn">
              Get Started
            </button>
          </div>
        </div>
        <div className="decorative-circle right-circle"></div>
      </div>
      <div className="wave-section">
        <img src="/assets/wave.svg" alt="Wavy background" className="wave" />
      </div>
    </div>
  );
}

export default Landing;
