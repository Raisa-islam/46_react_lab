import React, { useState } from 'react';

const NumberInputField = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const value = event.target.value.trim();
    setInputValue(value);

    if (/^-?\d*\.?\d*$/.test(value)) {
      setError('');
      onInputChange(parseFloat(value) || 0); // If the parsed value is NaN, use 0
    } else {
      setError('Please enter a valid number');
      onInputChange(null); // Reset the value if it's not a valid number
    }
  };

  return (
    <div>
      <input className='border border-2 border-black p-1 m-2 rounded-lg'
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default NumberInputField;
