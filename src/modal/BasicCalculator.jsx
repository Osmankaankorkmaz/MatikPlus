import React, { useState } from 'react';

const BasicCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [lastButtonWasOperator, setLastButtonWasOperator] = useState(false);

  const handleButtonClick = (value) => {
    // Check if the last character is a number or if the input is empty
    const isLastCharANumber = input.length > 0 && !isNaN(input[input.length - 1]);

    if (['+', '-', '*', '/'].includes(value)) {
      // Allow adding the operator only if the last character is a number
      if (isLastCharANumber) {
        setInput((prev) => prev + value);
        setLastButtonWasOperator(true);
      }
    } else {
      setInput((prev) => prev + value);
      setLastButtonWasOperator(false);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    setLastButtonWasOperator(false);
  };

  const handleCalculate = () => {
    try {
      const evaluatedResult = eval(input);
      setResult(evaluatedResult);
    } catch (error) {
      setResult('Hata');
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#6c757d]">
      <div className="bg-[#6c757d] rounded-lg p-6 w-full max-w-sm">
        <div className="mb-2">
          <div className="text-right border-b-2 pb-1">
            <span className="text-white text-lg">{input}</span>
          </div>
          <div className="text-right text-xl text-white font-semibold">
            {result}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['1', '2', '3', '+', 
            '4', '5', '6', '-', 
            '7', '8', '9', '*', 
            '0', '.', '=', '/'].map((item) => (
            <button
              key={item}
              className={`border border-2 border-black bg-white text-[#6c757d] rounded-lg transition duration-200 
                h-16 w-16 text-xl font-semibold ${
                  item === '=' ? 'bg-white' : ''
                } hover:bg-[#6c757d] hover:text-white  ${
                  (item === '=' && lastButtonWasOperator) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              onClick={() => {
                if (item === '=') {
                  if (!lastButtonWasOperator) {
                    handleCalculate();
                  }
                } else {
                  handleButtonClick(item);
                }
              }}
            >
              {item}
            </button>
          ))}
          <button
            className="bg-black text-white rounded-lg h-16 w-full hover:bg-white hover:text-black transition duration-200 col-span-4"
            onClick={handleClear}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicCalculator;
