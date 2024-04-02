import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDeleteTaskAction, getToggleTaskStatusAction } from '../redux/actions';

const Task = ({ task }) => {

  const queryState = useSelector((state) => state.queryReducer);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(getDeleteTaskAction(task.id));
  }

  const toggleTaskStatus = () => {
    dispatch(getToggleTaskStatusAction(task.id));
  }

  return (
    <li style={{ display: "flex", alignItems: "center", borderLeft: (task.isCompleted ? "4px solid green" : "4px solid red") }}>
      <span style={{ flex: 1, textDecoration: (task.isCompleted ? "line-through" : "none"), wordWrap: "break-word",width:"20%" }}>
        {task.text}
      </span>
      <span style={{ flex: 1, textDecoration: (task.isCompleted ? "line-through" : "none") }}>
        {task.category}
      </span>
      <span style={{ flex: 1, textDecoration: (task.isCompleted ? "line-through" : "none") }}>
        {task.priority}
      </span>
      <span style={{ flex: 1, textDecoration: (task.isCompleted ? "line-through" : "none") }}>
        {task.time}
      </span>
      <span>
        <button className="task-btn mark-comp-btn" onClick={toggleTaskStatus} style={{ background: (task.isCompleted ? "green" : "none") }}>&#x2714;</button>
        <button className="task-btn delete-btn" onClick={handleDelete}>X</button>
      </span>
    </li>
  )
}

export default Task