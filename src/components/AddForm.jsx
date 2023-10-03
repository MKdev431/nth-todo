import { useRef } from "react";

export default function AddForm({ setTasks }) {
  const inputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue === "") return alert("no empty tasks");
    setTasks(currentValue => {
      return [...currentValue, { id: crypto.randomUUID(), title: inputValue }];
    });
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Add task</label>
      <input
        ref={inputRef}
        className="add-input"
        type="text"
      />
      <button className="add-task-btn">Add task</button>
    </form>
  );
}
