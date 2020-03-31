import React from "react";
import SideNavbar from "./components/Navbar/SideNavbar";
import Dashboard from "./components/Dashboard/Dashboard";
import CryptoCurrencyState from "./context/cryptocurrency/CryptoCurrencyState";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <CryptoCurrencyState>
        <SideNavbar />
        <Dashboard />
      </CryptoCurrencyState>
    </div>
  );
}

export default App;
