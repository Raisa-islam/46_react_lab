import { useState } from 'react';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [showAddTaskForm, setShowAddTaskForm] = useState(false);
    const [editTaskIndex, setEditTaskIndex] = useState(null);

    const handleTitleChange = (event) => {
        setNewTaskTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setNewTaskDescription(event.target.value);
    };

    const handleAddTask = () => {
        if (newTaskTitle.trim() === '' || newTaskDescription.trim() === '') {
            alert('Please enter both title and description.');
            return;
        }

        const newTask = { title: newTaskTitle, description: newTaskDescription };
        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
        setNewTaskDescription('');
        setShowAddTaskForm(false);
    };

    const handleEditTask = (index) => {
        setEditTaskIndex(index);
        setNewTaskTitle(tasks[index].title);
        setNewTaskDescription(tasks[index].description);
    };

    const handleUpdateTask = () => {
        if (newTaskTitle.trim() === '' || newTaskDescription.trim() === '') {
            alert('Please enter both title and description.');
            return;
        }

        const updatedTasks = [...tasks];
        updatedTasks[editTaskIndex] = { title: newTaskTitle, description: newTaskDescription };
        setTasks(updatedTasks);
        setEditTaskIndex(null);
        setNewTaskTitle('');
        setNewTaskDescription('');
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="mt-4 mb-4 p-8 flex flex-col gap-4 items-center">
           
            <button className="btn btn-primary text-white" onClick={() => setShowAddTaskForm(true)}>Add a New Task</button>
            
            {showAddTaskForm && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter task title"
                        value={newTaskTitle}
                        onChange={handleTitleChange}
                        className="border-2 border-black p-2 m-2 rounded-lg"
                    />
                    <input
                        placeholder="Enter task description"
                        value={newTaskDescription}
                        onChange={handleDescriptionChange}
                        className="border-2 border-black p-2 m-2 rounded-lg"
                    />
                    <button className="btn btn-primary bg-orange-600 border-0 font-black" onClick={handleAddTask}>Add</button>
                </div>
            )}
            {editTaskIndex !== null && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter task title"
                        value={newTaskTitle}
                        onChange={handleTitleChange}
                        className="border-2 border-black p-2 m-2 rounded-lg"
                    />
                    <input
                        placeholder="Enter task description"
                        value={newTaskDescription}
                        onChange={handleDescriptionChange}
                        className="border-2 border-black p-2 m-2 rounded-lg"
                    />
                    <button className="btn btn-primary" onClick={handleUpdateTask}>Update</button>
                </div>
            )}
            {tasks.length > 0 && (
                <div className='mt-4 w-full'>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                <div className='shadow-xl border-2 border-blue-50 rounded-xl p-3 flex flex-row justify-between m-3'>
                                    <div className='flex flex-col gap-y-2 items-start px-3'>
                                        <p className='text-2xl text-black font-black'>{task.title}</p>
                                        <p className='text-lg text-black font-medium'>{task.description}{' '}</p>
                                    </div>

                                    <div className='flex flex-row gap-4'>
                                        <button className="btn btn-active btn-primary text-white bg-blue-950" onClick={() => handleEditTask(index)}>Edit</button>
                                        <button className="btn btn-active btn-secondary bg-red-700 text-white" onClick={() => handleDeleteTask(index)}>Delete</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TaskManager;
