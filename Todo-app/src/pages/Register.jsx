import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"

function Register() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister() {
    if (!id || !password) {
      alert("please fill all fields")
    }
    localStorage.setItem("userId", id);
    localStorage.setItem("password", password);
    setId (" ")
    setPassword(" ")

    window.alert("Registered Successfully!");
    navigate("/login");
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Register</h1>

        <input
          type="text"
          placeholder="Enter ID"
          autoComplete="off"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;