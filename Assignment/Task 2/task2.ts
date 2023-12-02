// Scenario 1: Sum numbers
function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  // Scenario 2: Check Even or Odd
  function checkEvenOrOdd(num: number): string {
    return num % 2 === 0 ? 'Even' : 'Odd';
  }
  
  // Scenario 3: Calculate Area
  function calculateArea(width: number, height: number): number {
    return width * height;
  }
  
  // Scenario 4: String Reversal
  function reverseString(inputString: string): string {
    return inputString.split('').reverse().join('');
  }
  
  // Scenario 5: Temperature Conversion
  function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }
  
  // Testing the functions
  console.log(add(5, 10)); // Output: 15
  console.log(checkEvenOrOdd(7)); // Output: Odd
  console.log(calculateArea(3, 4)); // Output: 12
  console.log(reverseString('Hello')); // Output: olleH
  console.log(convertCelsiusToFahrenheit(25)); // Output: 77
  