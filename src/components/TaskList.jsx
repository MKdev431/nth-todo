import Task from "./Task";

export default function TaskList({ tasks, setTasks }) {
  const deleteTask = id => {
    setTasks(
      tasks.filter(task => {
        if (task.id !== id) {
          return task;
        }
      })
    );
  };
  return (
    <ul>
      {tasks.map(task => {
        return (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            deleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
}
