import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/panel/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
