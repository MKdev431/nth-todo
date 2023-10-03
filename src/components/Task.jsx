export default function Task({ id, title, completed, setTasks, tasks }) {
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
    <>
      <li className="task">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTask(id, e.target.checked)}
        />
        {title}
        <button
          onClick={() => deleteTask(id)}
          className="delete-btn"
        >
          delete
        </button>
      </li>
    </>
  );
}
