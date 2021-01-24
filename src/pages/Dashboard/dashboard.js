import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-main container">
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

      {/* side panel */}
      <div className="dashboard-sidePanel flex py-3">
        <ul className="flex">
          <li className="flex">
            <i className="fas fa-columns"></i>
            <b>Dashboard</b>
          </li>
          <li className="flex">
            <i className="fas fa-tasks"></i>
            <b>Work Items</b>
          </li>
          <li className="flex">
            <i className="fas fa-users"></i>
            <b>Teams</b>
          </li>
        </ul>
        <i className="fas fa-cog fa-2x dashboard-sidePanel-settings"></i>
      </div>

      {/* displayed content */}
      <div className="dashboard-content flex">
        <h1>Content here</h1>
      </div>
    </div>
  );
}
