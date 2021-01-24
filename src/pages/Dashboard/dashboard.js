import React, { useState } from "react";
import "./dashboard.css";

// context api
import { DashProvider } from "./components/contextAPI/dashContext";

// main components
import Navbar from "./components/NavBar/navbar";
import SidePanel from "./components/SidePanel/sidePanel";

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
      <Navbar />
      <SidePanel tabFunc={tabFunc} />

      {/* displayed content */}
      <DashProvider value={{ things, setThings }}>
        <div className="dashboard-content flex">{renderTab(currentTab)}</div>
      </DashProvider>
    </div>
  );
}
