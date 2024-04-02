const initialState = {
  tasks: [],
  categories: []
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REORDER_TASKS":
      const { startIndex, endIndex } = action.payload;
      const tasksCopy = [...state.tasks];
      const [removedTask] = tasksCopy.splice(startIndex, 1);
      tasksCopy.splice(endIndex, 0, removedTask);
      return {
        ...state,
        tasks: tasksCopy
      };
    case "ADD_TASK":
      const { text, category,priority,time } = action.payload;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Math.floor(Math.random() * 1000),
            text: text,
            category: category,
            priority: priority,
            time:time,
            isCompleted: false
          }
        ],
        categories: [...state.categories, category]
      };

    case "DELETE_TASK":
      return {
        ...state, tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };

    case "TOGGLE_TASK_STATUS":
      return {
        ...state, tasks: state.tasks.map(task => {
          if (task.id !== action.payload.id) {
            return task;
          }
          return { ...task, isCompleted: !task.isCompleted }
        })
      };

    default:
      return state;
  }
}

export default tasksReducer;