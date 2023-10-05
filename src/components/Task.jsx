import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export default function Task({ id, title, completed, toggleTask, deleteTask, editTask }) {
  return (
    <>
      <li className="task">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTask(id, e.target.checked)}
        />
        {title}
        <BsTrash
          onClick={() => deleteTask(id)}
          className="delete-btn"
        />
        <FiEdit onClick={() => editTask(title, id)} />
      </li>
    </>
  );
}
