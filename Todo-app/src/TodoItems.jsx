
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Todo.css";

function Todo() {
  if(localStorage.getItem("access") !== "loggedin"){
   return <h1>Please Login First</h1>
}
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  const completedTasks = tasks.filter((t) => t.completed).length;

  const percentage =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  useEffect(() => {
    Notification.requestPermission();
  }, []);
  function handleLogin() {
  const savedId = localStorage.getItem("userId");
  const savedPass = localStorage.getItem("password");

  if (id === savedId && password === savedPass) {
    localStorage.setItem("access", "loggedin");

    navigate("/todo");
  } 
  else {
    alert("Invalid ID or Password");
  }
}

  function sendNotification(task) {
    if (Notification.permission === "granted") {
      new Notification("⏰ Reminder!", {
        body: `Complete your task: ${task}`,
      });
    }
  }

  function handelEdit(index) {
    setTask(tasks[index].text);
    setEditIndex(index);
  }

  function handleAdd() {
    if (task === "") {
      alert("Please Enter Task!");
      return;
    }

    if (editIndex !== null) {
      const update = tasks.map((t, i) =>
        i === editIndex ? { ...t, text: task } : t
      );

      setTasks(update);
      setEditIndex(null);
    } else {
      setTasks([
        ...tasks,
        {
          text: task,
          completed: false,
          time: new Date().toLocaleString(),
        },
      ]);

      setTimeout(() => {
        alert("Reminder: Complete your task - " + task);
        sendNotification(task);
      }, 180000);
    }

    setTask("");
  }

  function handleDelete(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  function handleComplete(index) {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );

    setTasks(updated);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function handleLogout() {
  localStorage.removeItem("access");

  alert("Logged Out Successfully");

  navigate("/login");
}

  return (
    <div className="todo-container">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <h1>Todo Tasks App 📑</h1>

      <div className="icons">
        <button>
          <FaTrash />
        </button>

        <button>
          <FaEdit />
        </button>

        <button>
          <FaCheck />
        </button>

      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-btn" onClick={handleAdd}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <h3>Progress: {percentage}% Done</h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="main-item">
        {tasks.map((t, index) => (
          <div className="task-item" key={index}>
            <span
              className="task-text"
              style={{
                textDecoration: t.completed ? "line-through" : "none",
              }}
            >
              {t.text}
            </span>

            <p>{t.time}</p>

            <div>
              <button
                className="edit-btn"
                onClick={() => handelEdit(index)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>

              <button
                className="complete-btn"
                onClick={() => handleComplete(index)}
                style={{
                  backgroundColor: t.completed ? "green" : "orange",
                  color: "white",
                  border: "2px solid white",
                  padding: "5px",
                  margin: "5px",
                }}
              >
                {t.completed ? "Completed ☑️" : "Complete Task"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Todo;