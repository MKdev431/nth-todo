export default function AddForm({ submitHandler, setNewTask, newTask, editFlag, inputFocusRef }) {
  return (
    <form onSubmit={submitHandler}>
      <input
        value={newTask}
        ref={inputFocusRef}
        placeholder="Enter task"
        onChange={e => setNewTask(e.target.value)}
        className="add-input"
        type="text"
      />
      <button className="add-task-btn">{editFlag ? "Add task" : "update task"}</button>
    </form>
  );
}
