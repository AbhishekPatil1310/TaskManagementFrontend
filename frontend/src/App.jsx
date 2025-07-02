import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from "./api/taskAPI";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (data) => {
    await createTask(data);
    fetchTasks();
  };

  const editTask = async (id, data) => {
    await updateTask(id, data);
    fetchTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const toggleStatus = async (id, currentStatus) => {
    await updateTask(id, { status: currentStatus === "pending" ? "completed" : "pending" });
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>📝 Task Manager</h1>
      <TaskForm
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
      />
      <TaskList
        tasks={tasks}
        onDelete={removeTask}
        onEdit={setTaskToEdit}
        onToggleStatus={toggleStatus}
      />
    </div>
  );
}

export default App;
