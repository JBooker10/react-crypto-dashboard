import React from "react";
import SearchBar from "./SearchBar";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <SearchBar />
      </section>
      <section className="navbar-section">
        <figure className="avatar avatar-lg" data-initial="JB">
          <i className="avatar-presence online"></i>
        </figure>
      </section>
    </header>
  );
}
