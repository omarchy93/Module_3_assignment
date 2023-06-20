// Math Object:answer o2 a

function SumOfSquares(num) {
    const Squares = num.reduce((total, num) => total + Math.pow(num, 2), 0);
  
    console.log(Squares);
    const rootOfSquares = Math.sqrt(Squares);
    console.log(rootOfSquares);
    return rootOfSquares;
  }
    const result = SumOfSquares([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]);
    console.log(result);