import React, { useState } from 'react';
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { arrayMove } from '@dnd-kit/sortable';
import { Task } from "./Task";
import { DndContext, closestCorners } from '@dnd-kit/core';

export const TaskAction = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: "Tr. Energy"},
    { id: '2', title: "Tr. Physical"},
    { id: '3', title: "Meditate"},
    { id: '4', title: "Rest"},
    { id: '5', title: "Explore"},
  ]);

  const getTaskPos = id => tasks.findIndex(task =>
    task.id === id)

  const handleDragEnd = event => {
    const {active, over} = event

    if(active.id === over.id) return;
    
    setTasks(tasks => {
      const originalPos = getTaskPos(active.id)
      const newPos = getTaskPos(over.id)

      return arrayMove(tasks, originalPos, newPos)
    })
  }

  return (
    <>
      <div>
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}>
          <SortableContext items={tasks}
          strategy={rectSortingStrategy}>
              {tasks.map((task) => (
                  <Task id={task.id} title={task.title} key={task.id} />
              ))}
          </SortableContext>
        </DndContext>
      </div>
    </>
  )
}

export default TaskAction

