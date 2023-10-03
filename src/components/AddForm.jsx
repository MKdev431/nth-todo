import { useState, useRef } from "react";

export default function AddForm({ tasks, setTasks }) {
  // const [addInputValue, setAddInputValue] = useState("");
  const addInputValue = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const value = addInputValue.current.value;
    if (value === "") return alert("no empty tasks");
    setTasks(prevValue => {
      return [...prevValue, { id: crypto.randomUUID(), title: value }];
    });
    addInputValue.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Add task</label>
      <input
        ref={addInputValue}
        // onChange={e => setAddInputValue(e.target.value)}
        className="add-input"
        type="text"
      />
      <button className="add-task-btn">Add task</button>
    </form>
  );
}
