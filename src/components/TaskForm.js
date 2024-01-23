// TaskForm.js

import React, { useState } from 'react';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleAddTask = () => {
    // Implement logic to add the task to your TaskList
    // You can use props or context to manage the state of tasks in App.js
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={handleTaskNameChange} />
        </label>
        <label>
          Task Description:
          <textarea value={taskDescription} onChange={handleTaskDescriptionChange} />
        </label>
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
