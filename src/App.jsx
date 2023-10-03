import { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <h1>To-do list</h1>
      <label>Search tasks</label>
      <input
        className="search-input"
        type="search"
      />
      <AddForm
        tasks={tasks}
        setTasks={setTasks}
      />
      <h2>tasks:</h2>
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
