import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TodoItem from './components/TodoItem';
import Modal from './components/Modal';

export interface Task {
  id: number;
  name: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: 'Eat', done: false },
    { id: 2, name: 'Sleep', done: false },
    { id: 3, name: 'Repeat', done: false },
  ]);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const addTask = (name: string): void => {
    const newTask: Task = {
      id: Date.now(),
      name,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setModalOpen(false);
  };

  const toggleTaskDone = (taskId: number): void => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: number): void => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <main className="relative m-4 max-w-md bg-white min-h-screen z-0">
      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add Task
      </button>

      <section>
        <h1 className="text-xl font-bold mb-2">To do</h1>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={() => toggleTaskDone(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </ul>
      </section>

      <Modal
        isOpen={isModalOpen}
        headerLabel="Add Task"
        onCloseRequested={() => setModalOpen(false)}
      >
        <AddTaskForm onAddTask={addTask} />
      </Modal>
    </main>
  );
}

export default App;
