import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';
import { reorderTasks } from '../redux/actions';

const Tasks = () => {
  const tasksState = useSelector((state) => state.tasksReducer);
  const query = useSelector((state) => state.queryReducer);
  const category = useSelector((state) => state.optionReducer);
  const priority = useSelector((state) => state.priorityReducer);
  let tasks = tasksState.tasks;
  const dispatch = useDispatch();

  if (query !== "") {
    tasks = tasks.filter(task => task.text.includes(query));
  }

  if (category !== "") {
    tasks = tasks.filter(task => task.category.includes(category));
  }

  if (priority !== "") {
    tasks = tasks.filter(task => task.priority.includes(priority));
  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return; 
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    
    dispatch(reorderTasks(startIndex, endIndex));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul id="task-list" {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>

                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Task task={task} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Tasks;
