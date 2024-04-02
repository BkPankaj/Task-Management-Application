import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSetQueryAction,getDropdownOptions,getSetPriorityAction } from '../redux/actions';


const SearchTask = () => {
  
  const [category, setCategory] = React.useState("");
  const categoriesState = useSelector(state => state.tasksReducer);
  const queryState = useSelector((state) => state.queryReducer);
  const dispatch = useDispatch();
  let categories = categoriesState.categories;

  

  const handleChange = (e) => {
    dispatch(getSetQueryAction(e.target.value));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    dispatch(getDropdownOptions(event.target.value));
  };

  const handlePriorityChange = (event) => {
    dispatch(getSetPriorityAction(event.target.value));
  };



  return (
    <>
      <div className='searchArea'>
      <input type="text" name="text" id='search-box' placeholder="Search task..." onChange={handleChange} />
      <select id='drop-down' value={category} onChange={handleCategoryChange}>
        <option value="">Sort by Category</option> 
          {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <select id='drop-down' onChange={handlePriorityChange}>
          <option value="">Sort by Priority</option> 
          <option value="High">High</option> 
          <option value="Medium">Medium</option> 
          <option value="Low">Low</option> 
        </select>

      </div>
    </>
  )
}

export default SearchTask
