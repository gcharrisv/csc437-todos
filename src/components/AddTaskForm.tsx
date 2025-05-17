import { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (name: string) => void;
}

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (value.trim() === '') return;
    onAddTask(value);
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={value}
        onChange={handleChange}
        placeholder="New task name"
        className="flex-1 rounded border border-gray-300 px-3 py-2 
                   focus:outline-none focus:ring focus:border-sky-500"
      />
      <button
        type="submit"
        className="rounded bg-sky-500 px-4 py-2 font-semibold text-white 
                   transition-colors hover:bg-sky-600 active:bg-sky-700"
      >
        Add task
      </button>
    </form>
  );
}

