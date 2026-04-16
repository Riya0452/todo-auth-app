
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import './App.css'
import Todo from './TodoItems'
import Login from "./pages/Login";




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
     <Route
  path="/todo"
  element={
    localStorage.getItem("access") ? <Todo /> :<Navigate to="/login"></Navigate>
  }
/>
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
</BrowserRouter>
  
    </>
  )
}

export default App

  

