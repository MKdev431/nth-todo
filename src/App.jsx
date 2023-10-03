import { useEffect, useMemo, useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      return task.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [tasks, query]);

  return (
    <div className="app">
      <h1>To-do list</h1>
      <label>Search tasks</label>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
        type="search"
      />
      <AddForm
        tasks={tasks}
        setTasks={setTasks}
      />
      {tasks.length ? <h2>tasks:</h2> : "no tasks"}
      <TaskList
        tasks={tasks}
        filteredTasks={filteredTasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
