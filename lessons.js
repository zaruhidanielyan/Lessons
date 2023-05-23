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


