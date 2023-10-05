import { useEffect, useRef, useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import TaskList from "./components/TaskList";

function App() {
  const [newTask, setNewTask] = useState("");
  const [editFlag, setEditFlag] = useState(true);
  const [editId, setEditId] = useState(0);
  const [selectValue, setSelectValue] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const inputFocusRef = useRef();
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    setFilteredTasks(
      tasks.filter(task => {
        if (selectValue === "all") {
          return task;
        } else if (selectValue === "completed" && task.completed) {
          return task;
        } else if (selectValue === "uncompleted" && !task.completed) {
          return task;
        }
      })
    );
  }, [tasks, selectValue]);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks]);

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
    <div className="app-container">
      <h1>To-do List</h1>
      <div className="app">
        <AddForm
          submitHandler={submitHandler}
          newTask={newTask}
          setNewTask={setNewTask}
          editFlag={editFlag}
          inputFocusRef={inputFocusRef}
        />
        <div className="select-wrapper">
          <select
            value={selectValue}
            onChange={e => setSelectValue(e.target.value)}
            name="tasks"
          >
            <option value="all">All</option>
            <option value="uncompleted">Uncompleted</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        {tasks.length ? <h2>tasks:</h2> : <h2>No tasks</h2>}
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
          filteredTasks={filteredTasks}
        />
      </div>
    </div>
  );
}

export default App;
