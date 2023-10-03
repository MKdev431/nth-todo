import { useState } from "react";

export default function AddForm({ tasks, setTasks }) {
  const [addInputValue, setAddInputValue] = useState("");
  const submitHandler = e => {
    e.preventDefault();
    setTasks(prevValue => {
      return [...prevValue, { id: crypto.randomUUID() }];
    });
  };
  console.log(tasks);
  return (
    <form onSubmit={submitHandler}>
      <label>Add task</label>
      <input
        value={addInputValue}
        onChange={e => setAddInputValue(e.target.value)}
        className="add-input"
        type="text"
      />
      <button>Add task</button>
    </form>
  );
}
