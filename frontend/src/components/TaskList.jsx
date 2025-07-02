import React from "react";

const TaskList = ({ tasks, onDelete, onEdit, onToggleStatus }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task._id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <div className="actions">
            <button onClick={() => onToggleStatus(task._id, task.status)}>
              Mark as {task.status === "pending" ? "Completed" : "Pending"}
            </button>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
