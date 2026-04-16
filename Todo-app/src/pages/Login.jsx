import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); 

    function handleLogin() {
       if(!id || !password){
      window.alert("please fill all fields")
    }
        const savedId = localStorage.getItem("userId");
        const savedPass = localStorage.getItem("password");

        if (id === savedId && password === savedPass) {
            localStorage.setItem("access", "loggedin");
             setId (" ")
             setPassword (" ")
            navigate("/todo");
        } else {
            window.alert("Invalid ID or Password");
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Login</h1>

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
                <p
                    style={{
                        color: "violet",
                        cursor: "pointer",
                        marginTop: "10px"
                    }}
                    onClick={() => navigate("/reset")}
                >
                    Forgot Password?
                </p>

                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;
