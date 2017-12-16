// 3) What is the largest prime factor of the the number 600851475143
const NUMBER = 600851475143

const isPrime = num => {
  if(num === 2) return true
  let result = true
  for(let i=2; i<=Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false
    }
  }
  return result
}

const divisors = () => {
  const primeDivisors = []
  let j = 2
  do {
    if(NUMBER % j === 0 && isPrime(j)) {
      primeDivisors.push(j)
    }
    j++
  } while(j<=NUMBER)
  return primeDivisors
}

const primeDivisorsArray = divisors()
console.log(primeDivisorsArray[primeDivisorsArray.length - 1])