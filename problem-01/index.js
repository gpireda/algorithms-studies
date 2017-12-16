// 1) Find the sum of all the multiples of 3 and 5 below 1000.
const LIMIT = 1000
const sumMult = () => {
  let sum = 0
  for(let i=3; i<LIMIT; i++) {
    if(i%3 || i%5) sum += i
  }
  return sum
}
console.log(sumMult())