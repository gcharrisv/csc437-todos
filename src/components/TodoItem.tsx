import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../App';

interface TodoItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ task, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between border border-gray-200 px-3 py-2 rounded">
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={task.done} onChange={onToggle} />
        <span className={task.done ? 'line-through text-gray-400' : ''}>
          {task.name}
        </span>
      </label>

      <button title="Delete task" onClick={onDelete}>
        <FontAwesomeIcon
          icon={faTrash}
          className="text-gray-500 hover:text-gray-700"
        />
      </button>
    </li>
  );
}

