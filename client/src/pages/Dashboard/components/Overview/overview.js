import React, { useContext } from "react";
import "./overview.css";

export default function Overview() {
  return (
    <div className="overview-main">
      <div className="glassBox glassEffect">Your teams</div>
      <div className="glassBox glassEffect">Work assigned to you</div>
      <div className="glassBox glassEffect">Work Overview</div>
      <div className="glassBox glassEffect">Notifications</div>
    </div>
  );
}
