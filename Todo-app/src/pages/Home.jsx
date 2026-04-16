import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">

        <div className="hero-left">
          <h1>Manage Your Daily Tasks Easily 📋</h1>

          <p>
            Stay productive, organized and never miss your goals with our
            smart Todo Application.
          </p>

          <div className="hero-buttons">
            <Link to="/register">
              <button className="register-btn">Register</button>
            </Link>

            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
            alt="Todo Illustration"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;