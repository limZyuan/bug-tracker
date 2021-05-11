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
  const [initialData, setInitialData] = useState({
    tasks: {
      "task-1": { id: "task-1", content: "Take out the trash" },
      "task-2": { id: "task-2", content: "Take out the code" },
      "task-3": { id: "task-3", content: "Do it now" },
      "task-4": { id: "task-4", content: "The gg" },
      "task-5": { id: "task-5", content: "Finish it" },
      "task-6": { id: "task-6", content: "Clean it up" },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "To do",
        taskIds: ["task-1", "task-2"],
      },
      "column-2": {
        id: "column-2",
        title: "In Progress",
        taskIds: ["task-3", "task-4"],
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        taskIds: ["task-5", "task-6"],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
  });

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
      <DashProvider value={{ initialData, setInitialData }}>
        <div className="dashboard-content">{renderTab(currentTab)}</div>
      </DashProvider>
    </div>
  );
}
