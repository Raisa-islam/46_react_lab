import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const NumberInputField = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const value = event.target.value.trim();
    setInputValue(value);

    if (/^-?\d*\.?\d*$/.test(value)) {
      setError('');
    } else {
      setError('Please enter a valid number');
    }
  };

  const handleBlur = () => {
    // Trigger onInputChange only when the input field loses focus
    onInputChange(parseFloat(inputValue) || 0);
  };

  return (
    <div>
      <input
        type="text"
        className='border-2 border-black p-2 m-2 rounded-lg'
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur} // Call handleBlur when the input field loses focus
        placeholder="Enter a number"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

// Prop validation
NumberInputField.propTypes = {
  onInputChange: PropTypes.func.isRequired // Ensure onInputChange prop is a function and required
};

export default NumberInputField;
