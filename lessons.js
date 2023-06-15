//Homework 7
function push(arr, el) {
  arr[arr.length] = el
  return arr
}


function unshift(arr, el) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i]
  }
  arr[0] = el
  return arr
}

function shift(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length = arr.length - 1
  return arr
}

function pop(arr) {
  arr.length = arr.length - 1
  return arr
}

function includes(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return true
    }
  }
  return false
}

function join(arr, separator) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i !== arr.length - 1) {
      result += separator;
    }
  }
  return result;
}

//Homework 6 
function newObject(obj) {
  const newObj = {}
  for (let key in obj) {
    let value = obj[key];
    if (value in newObj) {
      newObj[value] += `, ${key}`;
    } else {
      newObj[value] = key;
    }
  }
  return newObj
}

function shallowCompare(a, b) {
  const keys1 = Object.keys(a);
  const keys2 = Object.keys(b);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}
var a = { a: '1', b: '5' };
var b = { a: '1', b: '2' };
console.log(shallowCompare(a, b));

function isIsogram(str) {
  let letterCounts = {};

  for (let letter of str) {
    if (letterCounts[letter]) {
      console.log(`${str} is not an isogram.`);
      return false;
    }
    letterCounts[letter] = 1;
  }

  console.log(`${str} is an isogram.`);
  return true;
}

console.log(isIsogram('Hi hi'));



//Homework 5
1.
function isPrime(number) {
  let absNumber = Math.abs(number)
  if (absNumber % 2 == 0 && absNumber != 2) {
    return false
  }
  for (let i = 3; i < absNumber; i++) {
    if (absNumber % i == 0) {
      return false
    }
  }
  return true
}

2.
function allPrimeNumbers(num) {
  let primeNumbers = '';

  for (let i = 2; i <= num; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeNumbers += i;
    }
  }

  return primeNumbers;
}

console.log(allPrimeNumbers(9));

3.
function sumOfLargestNumbers(string) {
  let sum = 0;
  let largest = -Infinity;
  let currentNumber = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (isDigit(char)) {
      currentNumber += char;
    } else if (currentNumber !== '') {
      const num = Number(currentNumber);

      if (num > largest) {
        largest = num;
        sum = num;
      } else if (num === largest) {
        sum += num;
      }

      currentNumber = '';
    }
  }

  if (currentNumber !== '') {
    const num = Number(currentNumber);

    if (num > largest) {
      largest = num;
      sum = num;
    } else if (num === largest) {
      sum += num;
    }
  }

  return sum;
}

function isDigit(char) {
  return char >= '0' && char <= '9';
}

console.log(sumOfLargestNumbers('FwrtY45KHL120mn10P'))

4.
function removeStringAppearances(mainString, removeString) {
  let result = '';
  let currentIndex = 0;
  const removeStringLength = removeString.length;

  while (currentIndex < mainString.length) {
    let match = true;

    for (let i = 0; i < removeStringLength; i++) {
      if (mainString[currentIndex + i] !== removeString[i]) {
        match = false;
        break;
      }
    }

    if (match) {
      currentIndex += removeStringLength;
    } else {
      result += mainString[currentIndex];
      currentIndex++;
    }
  }

  return result;
}
console.log(removeStringAppearances("This is some text", "is"))

5.
function rearrangeString(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 3) {
    if (i + 2 < string.length) {
      result += string[i + 1] + string[i + 2] + string[i];
    } else {
      result += string[i];
    }
  }

  return result;
}
console.log(rearrangeString('dfgjkloyp'))

//Homework4

function numberOfOccurances(string, symbol) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] == symbol) {
      count++
    }
  }
  return count
}

function isPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] == string[string.length - 1 - i])
      return 'Yes'
  }
  return 'No'

}
console.log(isPalindrome('racecar'))

function changeFirstSymbol(string, sym1, sym2) {
  let newString = string;
  while (newString.includes(sym1)) {
    newString = newString.replace(sym1, sym2);
  }
  return newString
}
console.log(changeFirstSymbol('does the following code', 'o', '0'))

function printNumberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
      row += j
    }
    console.log(row)
  }

  for (let i = n - 1; i >= 1; i--) {
    let row = ''
    for (let j = 1; j <= i; j++) {
      row += j
    }
    console.log(row)
  }
}

//Homework3
function digitsOfNumber(number) {
  let absNumber = Math.abs(number)
  let absNumberToString = number.toString();
  let count = 0;
  for (let i = 0; i < absNumberToString.length; i++) {
    if (!isNaN(absNumberToString[i])) {
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
      count++
    }
  }
  return count
}

function successiveZeros(num) {
  let numberString = num.toString();
  for (let i = 0; i < numberString.length - 2; i++) {
    if (numberString[i] === '0' && numberString[i + 1] === '0' && numberString[i + 2] === '0') {
      return "Yes";
    }
  }
  return "No";
}
console.log(successiveZeros(350120003))


