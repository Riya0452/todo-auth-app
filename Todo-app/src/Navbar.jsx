import { Link } from "react-router-dom";
import"./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2>TodoApp</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/reset">Reset Password</Link>
      </div>
    </nav>
  );
}

export default Navbar;