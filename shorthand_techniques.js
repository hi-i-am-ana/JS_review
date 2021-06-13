// if with multiple || conditions
if (variable === value1 || variable === value2 || variable === value3) {

}
if ([value1, value2, value3].includes(variable)) {

}

// Optional chaining
let obj
console.log(obj) // undefined
console.log(obj.property1) // Cannot read property 'property1' of undefined
console.log(obj?.property1) // undefined

// Short-circuit evaluation is the semantics of some Boolean operators in some programming languages (including JS) in which the second argument is executed or evaluated only if the first argument does not suffice to determine the value of the expression: when the first argument of the AND function evaluates to false, the overall value must be false; and when the first argument of the OR function evaluates to true, the overall value must be true
let x // this is falsy (undefined)
const y = 'Anastasia';
const z = 'This will not evaluate';
const name = x || y || z;
console.log(name); // Anastasia