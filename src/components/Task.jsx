export default function Task({ id, title, completed, toggleTask, deleteTask }) {
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
        <button>Edit task</button>
      </li>
    </>
  );
}
