import React from "react";
import SideNavbar from "./components/Navbar/SideNavbar";
import Dashboard from "./components/Dashboard";
import CryptoCurrencyState from "./context/cryptocurrency/CryptoCurrencyState";
import PriceStreamingState from "./context/pricing/pricingState";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <CryptoCurrencyState>
        <SideNavbar />
        <PriceStreamingState>
          <Dashboard />
        </PriceStreamingState>
      </CryptoCurrencyState>
    </div>
  );
}

export default App;
