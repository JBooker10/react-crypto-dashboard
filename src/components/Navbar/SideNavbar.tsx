import React from "react";
import PieChartIcon from "./../Icons/PieChartIcon";
import "./Navbar.scss";

export default function SideNavbar() {
  return (
    <div className="side-navbar">
      <div className="navbar-brand"></div>
      <div className="navbar-list">
        <br />
        <div className="navbar-item active">
          <PieChartIcon className="nav-icon" />
          <span>Dashboard</span>
        </div>
        <div className="navbar-item">
          <PieChartIcon className="nav-icon" />
          <span>Trades</span>
        </div>
      </div>
    </div>
  );
}
