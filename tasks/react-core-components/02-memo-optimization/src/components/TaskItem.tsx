interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  console.log(`Rendering TaskItem: ${task.title}`);
  
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ 
        textDecoration: task.completed ? 'line-through' : 'none' 
      }}>
        {task.title}
      </span>
    </div>
  );
}
