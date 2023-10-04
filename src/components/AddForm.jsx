import { useState } from "react";

export default function AddForm({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (newTask === "") return alert("no empty tasks");
    addTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={newTask}
        placeholder="Enter task"
        onChange={e => setNewTask(e.target.value)}
        className="add-input"
        type="text"
      />
      <button className="add-task-btn">Add task</button>
    </form>
  );
}
