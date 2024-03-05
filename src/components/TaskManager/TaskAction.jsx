import React, { useState } from 'react';
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { Task } from "./Task";

export const TaskAction = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tr. Energy"},
    { id: 2, title: "Tr. Physical"},
    { id: 3, title: "Meditate"},
    { id: 4, title: "Rest"},
    { id: 5, title: "Explore"},
  ]);

  return (
    <>
      <div>
          <SortableContext items={tasks}
          strategy={rectSortingStrategy}>
              {tasks.map((task) => (
                  <Task id={task.id} title={task.title} key={task.id} />
              ))}
          </SortableContext>
      </div>
    </>
  )
}

export default TaskAction

