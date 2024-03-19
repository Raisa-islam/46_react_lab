import { useState } from "react";

const NumberInputField = () => {
  const [inputField, setInputField] = useState([]);
  const [warnings, setWarnings] = useState({});

  const addTextbox = () => {
    setInputField([...inputField, ""]);
  };

  const deleteTextbox = (index) => {
    const newInputField = inputField.filter((_, i) => i !== index);
    setInputField(newInputField);

    const newWarnings = { ...warnings };
    delete newWarnings[index];
    setWarnings(newWarnings);
  };

  const updateSum = (values) => {
    const newSum = values.reduce((acc, value) => acc + (Number(value) || 0), 0);
    return newSum;
  };

  const handleTextboxChange = (value, index) => {
    const newInputField = [...inputField];
    newInputField[index] = value;
    setInputField(newInputField);

    const newWarnings = { ...warnings };
    if (isNaN(value) || value === "") {
      newWarnings[index] = "Please enter a number";
    } else {
      delete newWarnings[index];
    }
    setWarnings(newWarnings);
  };

  const handleAddInputField = () => {
    addTextbox();
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <button className="btn btn-active btn-primary text-white" onClick={handleAddInputField}>
        Add Input Field
      </button>
      {inputField.map((value, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
            <div className="flex flex-row gap-3 justify-center items-center">
            <input className="border-2 border-black rounded-lg p-2 mx-2 my-1"
            type="text"
            placeholder="Enter a number"
            value={value}
            onChange={(e) => handleTextboxChange(e.target.value, index)}
          />
          <button className="btn btn-active btn-accent" onClick={() => deleteTextbox(index)}>
            Delete
          </button></div>
          
          {warnings[index] && <div className="warning text-red-500 text-lg font-semibold">{warnings[index]}</div>}
        </div>
      ))}
      <div className="px-5 py-3 rounded-lg text-black text-lg w-fit">Sum: {updateSum(inputField)}</div>
    </div>
  );
};

export default NumberInputField;
