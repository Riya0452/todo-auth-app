import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function ResetPassword() {
  const [id, setId] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  function handleReset() {
   
    if(!id || !newPassword){
      alert("please fill all fields")
      return
    }
    const savedId = localStorage.getItem("userId");

    if (id === savedId) {
      localStorage.setItem("password", newPassword);
      setId (" ")
      setNewPassword ("")

      window.alert("Password Reset Successful!");
      navigate("/login");
    } else {
      alert("ID Not Found!");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Reset Password</h1>

        <input
          type="text"
          placeholder="Enter Your ID"
          value={id}
          autoComplete="off"
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          autoComplete="new-password"
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button onClick={handleReset}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;