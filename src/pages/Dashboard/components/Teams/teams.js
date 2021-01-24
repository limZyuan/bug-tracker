import React, { useContext } from "react";
import dashContext from "../contextAPI/dashContext";

export default function Teams() {
  const { things, setThings } = useContext(dashContext);

  console.log(things);

  return (
    <div>
      <h1>Teams</h1>
      <h2>Tab</h2>
    </div>
  );
}
