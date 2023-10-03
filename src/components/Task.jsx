export default function Task({ id, title, setTasks, tasks, filteredTasks }) {
  const deleteTask = id => {
    setTasks(
      tasks.filter(task => {
        if (task.id !== id) {
          return task;
        }
      })
    );
  };
  return (
    <>
      <li>
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
