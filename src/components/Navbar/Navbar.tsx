import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <div className="input-group input-inline">
          <i className="icon icon-2x  icon-search"></i>
          <input
            className=""
            type="text"
            placeholder="Search Crypto Currency..."
            autoFocus
          />
        </div>
      </section>
      <section className="navbar-section">
        <figure className="avatar avatar-lg" data-initial="JB">
          <i className="avatar-presence online"></i>
        </figure>
      </section>
    </header>
  );
}
