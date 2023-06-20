// Numbers:answer 03 a

function isPrime(num) {
    if (num <= 1) {
    
    return false;
    
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
       return false;
      }
    }
  
     return true;
   }
   console.log( isPrime(7));
   console.log( isPrime(9));

   // Numbers:answer 03 b

   function Prime(num1) {
    if (num1 <= 1) {
    
    return false;
    
    }
    for (let i = 2; i <=Math.sqrt(num1); i++) {
      if (num1 % i === 0) {
       return false;
      }
    }
  
     console.log(` it's a prime number.`);
     
   }

   Prime(7);