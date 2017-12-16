// 2) Find the sum of the even-valued Fibonacci numbers whose values do not exceed four million.
const MAX_LIMIT = 4000000

const fibonacci = num => {
  return (num === 1 || num === 0) 
    ? 1 
    : fibonacci(num - 1) + fibonacci(num - 2)
}

const sumEven = () => {
  let sum = 0, num = 1, currentNumber = 0
  do {
    currentNumber = fibonacci(num)
    if(currentNumber % 2 === 0) sum += currentNumber
    num++
  } while(currentNumber <= MAX_LIMIT);
  return sum
}

console.log(sumEven())