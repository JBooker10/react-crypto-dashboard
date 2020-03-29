import React from "react";
import SideNavbar from "./components/Navbar/SideNavbar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <Dashboard />
    </div>
  );
}

export default App;
