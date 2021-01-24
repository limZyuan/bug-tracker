import React, { useContext } from "react";
import dashContext from "../contextAPI/dashContext";
import "./overview.css";

export default function Overview() {
  const { things, setThings } = useContext(dashContext);

  console.log(things);
  return (
    <div className="overview-main">
      <div className="glassBox">Your teams</div>
      <div className="glassBox">Work assigned to you</div>
      <div className="glassBox">Work Overview</div>
      <div className="glassBox">Notifications</div>
    </div>
  );
}
