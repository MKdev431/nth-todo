import Task from "./Task";

export default function TaskList({ filteredTasks, toggleTask, deleteTask, editTask }) {
  return (
    <ul>
      {filteredTasks.map(task => {
        return (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        );
      })}
    </ul>
  );
}
