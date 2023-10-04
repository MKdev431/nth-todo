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

  const addTask = title => {
    setTasks(currentValue => {
      return [...currentValue, { id: crypto.randomUUID(), title, completed: false }];
    });
  };

  const deleteTask = id => {
    setTasks(
      tasks.filter(task => {
        if (task.id !== id) {
          return task;
        }
      })
    );
  };

  const toggleTask = (id, completed) => {
    setTasks(currentValue => {
      return currentValue.map(task => {
        if (task.id === id) {
          return { ...task, completed };
        }
        return task;
      });
    });
  };

  return (
    <div className="app">
      <h1>To-do list</h1>
      <input
        value={query}
        placeholder="Search tasks"
        onChange={e => setQuery(e.target.value)}
        className="search-input"
        type="search"
      />
      <AddForm addTask={addTask} />
      {tasks.length ? <h2>tasks:</h2> : "no tasks"}
      <TaskList
        tasks={tasks}
        filteredTasks={filteredTasks}
        setTasks={setTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
