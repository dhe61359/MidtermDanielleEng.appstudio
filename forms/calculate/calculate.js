let num1 = Number(prompt("Enter 1st number."))
let num2 = Number(prompt("Enter 2nd number."))
let num3 = Number(prompt("Enter 3rd number."))

function calcAvgSquare(num1, num2, num3) {
    return  ((num1 + num2 + num3)/3) * Math.pow(num1, 2 )
  }
  
let answer = calcAvgSquare (num1, num2, num3)
   alert(`The answer is ${answer}.`)