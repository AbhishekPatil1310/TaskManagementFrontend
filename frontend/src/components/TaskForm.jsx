import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, taskToEdit, setTaskToEdit }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      editTask(taskToEdit._id, task);
    } else {
      addTask(task);
    }
    setTask({ title: "", description: "" });
    setTaskToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        name="title"
        placeholder="Task title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />
      <button type="submit">{taskToEdit ? "Update" : "Add"} Task</button>
    </form>
  );
};

export default TaskForm;
