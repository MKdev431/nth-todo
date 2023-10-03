import Task from "./Task";

export default function TaskList({ tasks, filteredTasks, setTasks }) {
  return (
    <ul>
      {filteredTasks.map(task => {
        return (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            setTasks={setTasks}
            tasks={tasks}
          />
        );
      })}
    </ul>
  );
}
