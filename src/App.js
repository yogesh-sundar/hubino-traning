import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Material from "./Components/Material";
import Practice from "./Components/Practice";
import Login from "./Components/Login/Logout";
import Logout from "./Components/Login/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Material />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
