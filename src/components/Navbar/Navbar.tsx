import React, { useState } from "react";
import SearchBar from "./SearchBar";
// import GitHubButton from "react-github-btn";

import Dropdown, {
  DropdownTrigger,
  DropdownContent,
  // @ts-ignore
} from "react-simple-dropdown";

import "./Navbar.scss";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  return (
    <header className="navbar">
      <section className="navbar-section">
        <SearchBar />
      </section>
      <section className="navbar-section nav-center">
        {/* <GitHubButton
          href="https://github.com/JBooker10/crypto-dashboard"
          data-color-scheme="no-preference: dark; light: light; dark: dark;"
          data-icon="octicon-star"
          aria-label="Star ntkme/github-buttons on GitHub"
        >
          Star
        </GitHubButton> */}
        <a
          rel="noopener noreferrer"
          className="navbar-icons"
          target="_blank"
          href="https://github.com/JBooker10"
        >
          <i className="fa fa-github"></i>
        </a>
        <Dropdown active={isActive} onClick={() => setActive(!isActive)}>
          <DropdownTrigger>
            <figure className="avatar avatar-lg">
              <i className="avatar-presence online"></i>
            </figure>
          </DropdownTrigger>
          <DropdownContent>
            <p>Login</p>
            <p>Profile</p>
            <p>Settings</p>
          </DropdownContent>
        </Dropdown>
      </section>
    </header>
  );
}
