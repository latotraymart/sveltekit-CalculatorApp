// src/routes/api/calculate.js
export function post(req) {
    const { expression } = req.body;
  
    // Helper function to perform basic arithmetic operations
    function calculateExpression(expression) {
      const operators = ['+', '-', '*', '/'];
  
      // Split the expression into numbers and operators
      const tokens = expression.split(/(\+|-|\*|\/)/);
  
      // Convert strings to numbers where possible
      const numbers = tokens.map((token) => parseFloat(token) || token);
  
      // Perform multiplication and division first
      for (let i = 1; i < numbers.length - 1; i += 2) {
        if (numbers[i] === '*') {
          numbers[i + 1] = numbers[i - 1] * numbers[i + 1];
          numbers[i - 1] = null;
          numbers[i] = null;
        } else if (numbers[i] === '/') {
          numbers[i + 1] = numbers[i - 1] / numbers[i + 1];
          numbers[i - 1] = null;
          numbers[i] = null;
        }
      }
  
      // Filter out null values (removed operators and processed values)
      const filteredNumbers = numbers.filter((num) => num !== null);
  
      // Perform addition and subtraction
      let result = filteredNumbers[0];
      for (let i = 1; i < filteredNumbers.length - 1; i += 2) {
        if (filteredNumbers[i] === '+') {
          result += filteredNumbers[i + 1];
        } else if (filteredNumbers[i] === '-') {
          result -= filteredNumbers[i + 1];
        }
      }
  
      return result;
    }
  
    let result;
  
    try {
      result = calculateExpression(expression);
    } catch (error) {
      result = 'Error';
    }
  
    return {
      body: { result },
    };
  }
  