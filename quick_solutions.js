const myObject = {a: 1, b: 2, c: -2}

// Find highest value in object
const maxValue1 = Math.max(...Object.values(myObject))
const maxValue2  = Object.values(myObject).reduce((accu, curval) => accu > curval ? accu : curval)


// Find key of highest value in object
const maxValueKey = Object.keys(myObject).reduce((accu, curval) => myObject[accu] > myObject[curval] ? accu : curval);

console.log(maxValue1, maxValue2, maxValueKey)