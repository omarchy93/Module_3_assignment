 // Math Object:answer 02 b

const numbers = [1, 2, 3, 4, 5,6,7,8,9];
function RootOfSqrt(numbers) {
    const sumOfSquares = numbers.reduce((total, num) => total + Math.pow(num, 2), 0);
    const rootofSqrt = Math.sqrt(sumOfSquares);
    console.log(`The square root of the sum of squares is: ${rootofSqrt}`);
  }
 
  RootOfSqrt(numbers);

