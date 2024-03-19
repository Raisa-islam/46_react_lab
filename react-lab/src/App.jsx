import { useState } from 'react';
import './App.css';
import NumberInputField from './components/NumberInputField';
import TaskManager from './components/TaskManager'; // Import the TaskManager component

function App() {
  
  const [inputFields, setInputFields] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddInputField = () => {
    setInputFields([...inputFields, { key: inputFields.length, value: '', onDelete: handleDeleteInputField }]);
  };

  const handleInputChange = (index, value) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = value;
    setInputFields(newInputFields);

    let newTotal = 0;
    newInputFields.forEach(({ value }) => {
      newTotal += isNaN(value) ? 0 : parseFloat(value);
    });
    setTotal(newTotal);
  };
  const handleDeleteInputField = (index, value) => {
    const newInputFields = inputFields.filter((_, i) => i !== index);
    setInputFields(newInputFields);

    let newTotal = total;
    newTotal -= isNaN(value) ? 0 : parseFloat(value);
    setTotal(newTotal);
  };

  const [showTaskManager, setShowTaskManager] = useState(false); // State to toggle the visibility of TaskManager
  const handleToggleTaskManager = () => {
    setShowTaskManager(!showTaskManager); // Toggle the state to show/hide TaskManager
  };

  return (
    <>
      <div className='container mx-auto flex flex-col gap-4'>
        <div>
        <button className="btn btn-primary text-white" onClick={handleAddInputField}>Add Input Field</button>
        {inputFields.map(({ key, value }, index) => (
          <div key={key}>
            <NumberInputField
              value={value}
              onInputChange={(newValue) => handleInputChange(index, newValue)}
              onDelete={() => handleDeleteInputField(index, value)}
            />
          </div>
        ))}
        {total !== 0 && <div><h2>Total: {total}</h2></div>}
        </div>
        <div>
          <button className="btn btn-primary text-white" onClick={handleToggleTaskManager}>Add New Task</button> {/* Button to toggle TaskManager */}
          {showTaskManager && <TaskManager />} {/* Render TaskManager if showTaskManager is true */}
        </div>

      </div>
    </>
  );
}

export default App;
