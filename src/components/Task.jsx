import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export default function Task({ id, title, completed, toggleTask, deleteTask, editTask }) {
  return (
    <>
      <li className="task">
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={e => toggleTask(id, e.target.checked)}
        />
        {title}
        <div className="icons-wrapper">
          <BsTrash
            onClick={() => deleteTask(id)}
            className="delete-btn"
          />
          <FiEdit
            className="edit-btn"
            onClick={() => editTask(title, id)}
          />
        </div>
      </li>
    </>
  );
}
