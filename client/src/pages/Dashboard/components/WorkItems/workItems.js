import React, { useContext } from "react";
import dashContext from "../contextAPI/dashContext";

// css
import "./workItems.css";

import Column from "./column";

// react beautiful dnd
import { DragDropContext } from "react-beautiful-dnd";

export default function WorkItems() {
  const { initialData, setInitialData } = useContext(dashContext);

  const onDragEnd = (result) => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="workItemsContainer">
        {initialData.columnOrder.map((columnId) => {
          const column = initialData.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => initialData.tasks[taskId]
          );

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
}
