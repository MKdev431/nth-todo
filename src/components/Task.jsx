export default function Task({ title, deleteTask, id }) {
  return (
    <>
      <li
      // key={id}
      // id={id}
      >
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
