import Task from "./Task";

export default function TaskList({ tasks }) {
  return (
    <ul>
      <Task tasks={tasks} />
    </ul>
  );
}
