function digitsOfNumber(number) {
    let absNumber = Math.abs(number)
    let absNumberToString = number.toString();
    let count = 0;
    for (let i = 0; i < absNumberToString.length; i++) {
      if (absNumberToString[i].length === '0') {
        return count++
      } else if (!isNaN(absNumberToString[i])) {
        count++
      }
    }
    return count
  }
  console.log(digitsOfNumber(0))
  


function countOfNumber(num) {
    let count = 0;
    let numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
      if (numString[i] == '9') {
        count++;
      }
    }
    return count;
  }

  function successiveZeros(num) {
    let numberString = num.toString();
    for (let i = 0; i < numberString.length; i++) {
      
      if (numberString[i] === '0' && numberString[i+1] === '0' && numberString[i+2] === '0') {
         return "Yes";
      }
     }
     return "No";
  }
  console.log(successiveZeros(350120003))