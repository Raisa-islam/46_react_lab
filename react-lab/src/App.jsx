import React, { useState } from 'react';
import './App.css';
import NumberInputField from './components/NumberInputField';
import TaskManager from './components/TaskManager'; // Import the TaskManager component

function App() {
  const [inputFields, setInputFields] = useState([]);
  const [total, setTotal] = useState(0);
  const [showTaskManager, setShowTaskManager] = useState(false); // State to toggle the visibility of TaskManager

  const handleAddInputField = () => {
    setInputFields([...inputFields, <NumberInputField key={inputFields.length} onInputChange={handleInputChange} />]);
  };

  const handleInputChange = (value) => {
    setTotal((prevTotal) => prevTotal + (isNaN(value) ? 0 : parseFloat(value)));
  };

  const handleToggleTaskManager = () => {
    setShowTaskManager(!showTaskManager); // Toggle the state to show/hide TaskManager
  };

  return (
    <>
      <div className='container mx-auto'>
        <button className="btn btn-primary text-white" onClick={handleAddInputField}>Add Input Field</button>
        {inputFields.map((inputField, index) => (
          <div key={index}>{inputField}</div>
        ))}
        <div>
          <h2>Total: {total}</h2>
        </div>
        <button className="btn btn-primary text-white" onClick={handleToggleTaskManager}>Add New Task</button> {/* Button to toggle TaskManager */}
        {showTaskManager && <TaskManager />} {/* Render TaskManager if showTaskManager is true */}
      </div>
    </>
  );
}

export default App;
