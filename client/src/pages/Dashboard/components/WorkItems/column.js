import React from "react";
import Task from "./task.js";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ column, tasks }) {
  return (
    <div className="columnContainer glassEffect p-1">
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="tasksList my-1 py-1"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
