import { BsFillPlusSquareFill } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";

export default function AddForm({ submitHandler, setNewTask, newTask, editFlag, inputFocusRef }) {
  return (
    <form onSubmit={submitHandler}>
      <input
        value={newTask}
        ref={inputFocusRef}
        placeholder="Enter task"
        onChange={e => setNewTask(e.target.value)}
        className="input"
        type="text"
      />
      {editFlag ? (
        <BsFillPlusSquareFill
          onClick={submitHandler}
          className="add-btn"
        />
      ) : (
        <RiEditBoxFill
          onClick={submitHandler}
          className="edit-input-btn"
        />
      )}
    </form>
  );
}
