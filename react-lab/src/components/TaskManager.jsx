import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [showInputFields, setShowInputFields] = useState(true);

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '' && newTaskDescription.trim() !== '') {
      if (editingIndex !== null) {
        // If editing an existing task
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = { title: newTaskTitle, description: newTaskDescription };
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        // If adding a new task
        setTasks([...tasks, { title: newTaskTitle, description: newTaskDescription }]);
      }
      setNewTaskTitle('');
      setNewTaskDescription('');
      setShowInputFields(false); // Hide input fields after adding a task
    }
  };

  const handleEditTask = (index) => {
    setNewTaskTitle(tasks[index].title);
    setNewTaskDescription(tasks[index].description);
    setEditingIndex(index);
    setShowInputFields(true); // Show input fields when editing a task
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      {showInputFields && ( // Conditionally render input fields
        <>
          <input
            type="text" className='border-2 border-black p-1 m-1 rounded-lg'
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter task title"
          />
          <input
            type="text" className='border-2 border-black p-1 m-1 rounded-lg'
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            placeholder="Enter task description"
          />
          <button className="btn btn-ghost border border-black" onClick={handleAddTask}>
            {editingIndex !== null ? 'Edit Task' : 'Add Task'}
            </button>
        </>
      )}
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className='shadow-xl border-2 border-blue-50 rounded-xl p-3 flex flex-row justify-between m-3'>
                <div className='flex flex-col gap-y-2 items-start px-3'>
                    <p className='text-2xl text-black font-black'>{task.title}</p>
                    <p className='text-lg text-black font-medium'>{task.description}{' '}</p>
                </div>
             
                <div className='flex flex-row gap-4'>
                    <button className='btn btn-active btn-primary text-white' onClick={() => handleEditTask(index)}>Edit</button>{' '}
                    <button className='btn btn-active btn-accent bg-red-600 text-white border-0' onClick={() => handleDeleteTask(index)}>Delete</button>
                </div>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
