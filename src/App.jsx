import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import TaskList from "./components/TaskList";

function App() {
  const [newTask, setNewTask] = useState("");
  const [editFlag, setEditFlag] = useState(false);
  const [editId, setEditId] = useState(0);
  const inputFocusRef = useRef();
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

  const submitHandler = e => {
    e.preventDefault();
    if (newTask === "") return alert("no empty tasks");

    if (editFlag) {
      setTasks(currentValue => {
        return [...currentValue, { id: crypto.randomUUID(), title: newTask, completed: false }];
      });
    } else {
      setEditFlag(!editFlag);
      setTasks(currentValue => {
        return currentValue.map(task => {
          if (task.id === editId) {
            return { ...task, title: newTask };
          }
          return task;
        });
      });
    }
    setNewTask("");
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

  const editTask = (title, id) => {
    setEditFlag(!editFlag);
    setNewTask(title);
    setEditId(id);
    inputFocusRef.current.focus();
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
      <AddForm
        submitHandler={submitHandler}
        newTask={newTask}
        setNewTask={setNewTask}
        editFlag={editFlag}
        inputFocusRef={inputFocusRef}
      />
      {tasks.length ? <h2>tasks:</h2> : "no tasks"}
      <TaskList
        tasks={tasks}
        filteredTasks={filteredTasks}
        setTasks={setTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
