import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const TaskStats = () => {

  const tasksState = useSelector((state) => state.tasksReducer);
  const tasks = tasksState.tasks;
  const completedNoOfTasks = tasks.filter(task => task.isCompleted).length;
  const pendingNoOfTasks = tasks.length - completedNoOfTasks;
  
  return (
    <div style={{margin: "15px",backgroundColor:"#f0b954"}}>{completedNoOfTasks} Completed, {pendingNoOfTasks} pending</div>
  )
}

export default TaskStats