// Check if each element of an array b is the sum of any two elements of an array a
const isSum = (a, b) => {
  a.forEach((itemI, i) => a.forEach((itemJ, j) => i !== j ? b = b.filter(itemB => itemB !== itemI + itemJ) : false))
  return b.length === 0 ? "yes" : "no"
}
console.log(isSum([3, 5, 1, 4, 2], [3, 4, 5, 6, 8])) // yes
console.log(isSum([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])) // no

// Find the longest string in a given array
// Variant1
const longestString1 = (array) => {
  const arrayOfLengths = array.map(string => string.length)
  return array[arrayOfLengths.indexOf(Math.max(...arrayOfLengths))]
}
console.log(longestString1(['a', 'abc', 'abcdefq', 'abcdefg', 'abcde']))
// Variant2
const longestString2 = (array) => {
  let maxString = ''
  array.forEach(string => {
    if (string.length > maxString.length) {
      maxString = string
    }
  })
  return maxString
}
console.log(longestString2(['a', 'abc', 'abcdefq', 'abcdefg', 'abcde']))
// Variant3
const longestString3 = (array) => {
  return array.reduce((accu, curval) => accu.length >= curval.length ? accu : curval, '')
}
console.log(longestString3(['a', 'abc', 'abcdefq', 'abcdefg', 'abcde']))
// Variant4
const longestString4 = (array) => {
  return array.sort((a,b) => b.length - a.length)[0]
}
console.log(longestString4(['a', 'abc', 'abcdefq', 'abcdefg', 'abcde']))

// Remove dublicates from an array
// Variant1
const removeDublicates1 = array => array.filter((element, index) => array.indexOf(element) === index)
console.log(removeDublicates1([1, 2, 3, 1, 6, '1', 'a', 'f', 'ab', 'a', 'c', 5]))
// Variant2
const removeDublicates2 = array => array.reduce((accu, curval) => accu.includes(curval) ? accu : [...accu, curval], [])
console.log(removeDublicates2([1, 2, 3, 1, 6, '1', 'a', 'f', 'ab', 'a', 'c', 5]))

// Pythagorean triplets in array a2 + b2 = c2
// Variant1 - time complexity O(N3)
const hasTriplets1 = array => {
  array.sort()
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] * array[i] + array[j] * array[j] === array[k] * array[k]) return true
      }
    }
  }
  return false
}
console.log(hasTriplets1([5, 3, 4]))
// Variant2 - time complexity O(N2)
const hasTriplets2 = array => {
  array = array.sort().map(number => number * number)
  for (let c = array.length - 1; c >= 2; c--) { // fixing index c
    let a = 0 // fixing index a
    let b = c - 1 // fixing index b
    while (a < b) {
      if (array[a] + array[b] === array[c]) return true
      if (array[a] + array[b] < arrat[c]) a++
      else b--
    }
  }
  return false
}
console.log(hasTriplets2([5, 3, 4]))

// Write a function which prints every number from 0 up to the given input. If divisible by 3, print "Fizz" instead of the number. If divisible by 5, print "Buzz". If input is divisible by 3 AND 5, print "FizzBuzz"
const printNumbers = number => {
  for (let i = 0; i <= number; i++) {
    i % 3 === 0 && i % 5 === 0 ? console.log('FizzBuzz') : i % 3 === 0 ? console.log('Fizz') : i % 5 === 0 ? console.log('Buzz') : console.log(i)
  }
}
printNumbers(15)

// Fibonacci
// Variant1 - time complexity O(N), space complexity O(N)
const fibonacci1 = (n, cache) => {
  if (n==0 || n == 1) return n;
  cache = cache || []
  if (cache[n]) return cache[n]
  return cache[n] = fibonacci1(n - 1, cache) + fibonacci1(n - 2, cache)
}
console.log(fibonacci1(50))
// Variant2 - time complexity O(N), space complexity - constant
const fibonacci2 = n => {
  let a = 1, b = 0, temp;
  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
}

// Sieve of Eratosthenes - find all prime numbers up to a given limit
// Variant 1
const sieveOfEratosthenes1 = n => {
  const array = new Array(n + 1).fill(true)
  array[0] = false
  array[1] = false
  for (let i = 2; i <= n; i++) {
    if (array[i] === true) {
      for (let j = i + i; j <= n; j = j + i) {
        array[j] = false
      }
    }
  }
  return array.reduce((accu, curval, index) => {
    curval ? accu.push(index) : false
    return accu
  }, [])
}
console.log(sieveOfEratosthenes1(13))
// Variant 2 - only optimisation
const sieveOfEratosthenes2 = n => {
  const array = new Array(n + 1).fill(true)
  array[0] = false
  array[1] = false
  // Iterate up to the square root of the limit
  for (let i = 2; i < Math.pow(n, 0.5); i++) {
    if (array[i] === true) {
      // Start the checks at current2, previous were already marked
      for (let j = Math.pow(i, 2); j <= n; j = j + i) {
        array[j] = false
      }
    }
  }
  return array.reduce((accu, curval, index) => {
    curval ? accu.push(index) : false
    return accu
  }, [])
}
console.log(sieveOfEratosthenes2(13))

// Calculate amount of water
function naiveSolution(heights) {
  let totalWater = 0;
  for (let i = 1; i < heights.length - 1; i++) {
    let leftBound = 0;
    let rightBound = 0;
    // We only want to look at the elements to the left of i, which are the elements at the lower indices
    for (let j = 0; j < i; j++) { 
      leftBound = Math.max(leftBound, heights[j]);
    }
    // Likewise, we only want the elements to the right of i, which are the elements at the higher indices
    for (let j = i+1; j < heights.length; j++) {
      rightBound = Math.max(rightBound, heights[j]);
    }
    totalWater += Math.min(leftBound, rightBound) - heights[i];
  }
  return totalWater;
}
console.log(naiveSolution([4, 2, 1, 3, 0, 1, 2]))

// Given an input array, sort the array given to an explicit order. If elements aren’t in the given explicit order, put them at the back in the same order they appeared in
const explicitSortWithComparator = (inputArray, order) => {
  const explicitComparator = (a, b) => {
    indexA = order.length
    indexB = order.length
    if (order.includes(a)) indexA = order.indexOf(a)
    if (order.includes(b)) indexB = order.indexOf(b)
    return indexA - indexB
  }  
  return inputArray.sort(explicitComparator);
}
const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'n', 'y', 'g']
const order = ['a', 'n', 'd', 'y']
console.log(explicitSortWithComparator(inputArray, order)); // [ 'a', 'n', 'd', 'y', 'b', 'c', 'e', 'f', 'g' ]

//  Find length of longest subarray with sum of elements <= k
// Variant 1 - time comlextity O(N3)
function maxLength1(a, k) {
  const isSatisfied = (a, stInd, l, k) => {
      let total = 0
      for (let i = 0; i < l; i++) {
          total = total + a[stInd + i]
          if (total > k) return false
      }
      return true
  }
  let answer = 0;
  for (let l = 1; l <= a.length; l ++) {
      for (let stInd = 0; stInd <= a.length - l; stInd ++) {
          if (isSatisfied(a, stInd, l, k)) {
              answer = l
          }
      }
  }
  return answer
}
// Variant 2 - time complexity O(N2) - check this
function maxLength2(a, k) {
  let answer = 0
  for (i = 0; i < a.length; i++) {
    let total = 0
    let l = 0
    let curInd = i
    while (total <= k && curInd < a.length) {
      l++
      total = total + a[curInd]
      console.log(total + "total" + l)
      curInd++
    }
    if (curInd)
    if ( l - 1 > answer) answer = l - 1
  }
  return answer
}
// Variant 3 - time complexity O(N2)
function maxLength3(a, k) {
  let answer = 0
  for (i = 0; i < a.length; i++) {
    let total = 0
    let l = 0
    for (let curInd = i; curInd < a.length; curInd++) {
      total = total + a[curInd]
      if (total <= k) {
        l = curInd - i + 1
      } else break
    }
    if (l > answer) answer = l
  }
  return answer
}
console.log(maxLength2([6,1,1,1,1], 5))
// Variant 4 - time complexity O(N) - finish this
// const maxLength4 = (a, k) => {
//   let total = 0
//   let l = 0
//   let i = 0
//   while (total <= k && curInd < a.length) {
//     if (total + a[i] <= k) {
//       i++
//       l++
//     }
//   }
// }


// Vote counting machine
const countVotes = (validCandidates, voteCasted) => {
  let counting = []
  validCandidates.forEach((candidate, i) => {
    counting[i] = 0
    voteCasted.forEach(vote => {
      if (candidate === vote) {
        counting[i]++
      }
    })
  })
  const validVotes = counting.reduce((accu, curval) => accu + curval)
  const invalidVotes = voteCasted.length - validVotes
  if (invalidVotes > validVotes || voteCasted.length === 0) {
    console.log('N/A')
  } else {
    const winnerIndex = counting.indexOf(Math.max(...counting))
    const winner = validCandidates[winnerIndex]
    result = ''
    validCandidates.forEach((candidate, i) => {
      result += `${candidate}=${counting[i]} `
    })
    result += `invalidVotes=${invalidVotes} `
    result += `Winner=${winner}`
    console.log(result)
  }
}
const validCandidates = ['A', 'B', 'C']
const voteCasted = ['A', 'F', 'A', 'B', 'A', 'B', 'A', 'C', 'E']
countVotes(validCandidates, voteCasted) // A=4 B=2 C=1 invalidVotes=2, Winner=A