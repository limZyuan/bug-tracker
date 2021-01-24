import React, { useState } from "react";
import "./dashboard.css";

// context api
import { DashProvider } from "./components/contextAPI/dashContext";

// tabs
import Overview from "./components/Overview/overview";
import WorkItems from "./components/WorkItems/workItems";
import Teams from "./components/Teams/teams";

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState("Overview");

  /* Context API state */

  // dummy variable for testing
  const [things, setThings] = useState([
    { id: 1, name: "thing 1", length: 5 },
    { id: 2, name: "thing 2", length: 2 },
    { id: 3, name: "thing 3", length: 6 },
    { id: 4, name: "thing 4", length: 10 },
    { id: 5, name: "thing 5", length: 1 },
  ]);

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
      <DashProvider value={{ things, setThings }}>
        <div className="dashboard-content flex">{renderTab(currentTab)}</div>
      </DashProvider>
    </div>
  );
}
