import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAddTaskAction } from '../redux/actions';

const AddTask = () => {
  const tasksState = useSelector((state) => state.tasksReducer);
  const categoriesState = useSelector(state => state.optionReducer);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const handleChangeTitle = (e) => {
    setTask(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    const currentTime = new Date().toLocaleString();
    dispatch(getAddTaskAction(task, category,priority,currentTime));
    setTask('');
    setCategory('');
    setPriority('');
  };

  return (
    <>
      <input type="text" name="task" id='add-task-box' placeholder="Add New Task" value={task} onChange={handleChangeTitle}/>
      <div className='dropdownArea'>
      <select id='adddropdown' onChange={handlePriority}>
          <option value="">Select Priority</option> 
          <option value="High">High</option> 
          <option value="Medium">Medium</option> 
          <option value="Low">Low</option> 
        </select>
      <input type="text" name="category" id="addcat" placeholder="Category" value={category} onChange={handleChangeCategory}/>
      </div>
      <button id='submit-btn' onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default AddTask;