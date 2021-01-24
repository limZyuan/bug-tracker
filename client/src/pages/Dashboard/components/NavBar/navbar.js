import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <React.Fragment>
      {/* navbar */}
      <nav className="dashboard-nav flex p-3">
        <div>Logo</div>
        <input
          className="dashboard-search"
          type="text"
          placeholder="Search..."
        ></input>
        <ul className="flex">
          <li>
            <i className="fas fa-tasks"></i>
          </li>
          <li>
            <i className="fas fa-bell"></i>
          </li>
          <li>
            <i className="fas fa-user"></i>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
