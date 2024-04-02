export const getAddTaskAction = (text, category, priority, time) => {
  return { type: "ADD_TASK", payload: { text, category, priority, time } }
}

export const getDeleteTaskAction = (id) => {
  return { type: "DELETE_TASK", payload: { id } }
}

export const getToggleTaskStatusAction = (id) => {
  return { type: "TOGGLE_TASK_STATUS", payload: { id } }
}

export const getSetQueryAction = (query) => {
  return { type: "SET_QUERY", payload: query }
}

export const updateDropdownOptions = (category) => {
  return { type: 'SET_OPTIONS', payload: category };
};

export const getDropdownOptions = (category) => {
  return { type: 'GET_OPTIONS', payload: category };
};

export const getSetPriorityAction = (priority) => {
  return { type: "SET_PRIORITY", payload: priority }
}

export const reorderTasks = (startIndex, endIndex) => {
  return {
    type: "REORDER_TASKS", payload: {startIndex,endIndex}};
};