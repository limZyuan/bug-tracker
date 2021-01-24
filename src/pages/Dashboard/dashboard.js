import React, { useState } from "react";
import "./dashboard.css";

// tabs
import Overview from "./components/Overview/overview";
import WorkItems from "./components/WorkItems/workItems";
import Teams from "./components/Teams/teams";

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState("Overview");

  const tabFunc = (tab) => (e) => {
    setCurrentTab(tab);
  };

  const renderTab = (currentTab) => {
    if (currentTab === "Overview") {
      return <Overview />;
    } else if (currentTab === "WorkItems") {
      return <WorkItems />;
    } else if (currentTab === "Teams") {
      return <Teams />;
    }
  };

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

      {/* displayed content */}
      <div className="dashboard-content flex">{renderTab(currentTab)}</div>
    </div>
  );
}
