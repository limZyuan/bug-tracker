import React from "react";
import "./sidePanel.css";

export default function SidePanel({ tabFunc }) {
  return (
    <React.Fragment>
      {/* side panel */}
      <div className="dashboard-sidePanel flex py-3">
        <ul className="flex">
          <li className="flex" onClick={tabFunc("Overview")}>
            <i className="fas fa-columns"></i>
            <b>Overview</b>
          </li>
          <li className="flex" onClick={tabFunc("WorkItems")}>
            <i className="fas fa-tasks"></i>
            <b>Work Items</b>
          </li>
          <li className="flex" onClick={tabFunc("Teams")}>
            <i className="fas fa-users"></i>
            <b>Teams</b>
          </li>
        </ul>
        <i className="fas fa-cog fa-2x dashboard-sidePanel-settings"></i>
      </div>
    </React.Fragment>
  );
}
