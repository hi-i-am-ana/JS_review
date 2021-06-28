// Constructor function 1
function Individual(name) {
  this.name = name;
  this.greeting = function() {
    return `Hi! I'm ${this.name}.`;
  };
}
// Constructor call 1
let individualA = new Individual('Bob');
let individualB = new Individual('Sarah');
console.log(individualA.name);
console.log(individualB.greeting());

// Constructor function 2
function Person(first, last, age, gender, interests) {
  this.name = {
     first: first,
     last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    const pronoun = this.gender === 'male' ? 'He' : 'She';
    const interests = this.interests.reduce((accu, curval, i) =>  i === this.interests.length - 1 ? `${accu}, and ${curval}` : `${accu}, ${curval}`);
    return `${this.name.first} ${this.name.last} is ${this.age} years old. ${pronoun} likes ${interests}.`;
  };
  this.greeting = function() {
    return `Hi! I'm ${this.name.first}.`;
  };
}
// Constructor call 2
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'running']);
console.log(person1.age);
console.log(person1.interests[0]);
console.log(person1.bio());

//////////////////////////////
// The Object() constructor

// Create an empty object
let person2 = new Object();
// Add properties and methods
person2.name = 'Chris';
person2.age = 38;
person2.greeting = function() {
  return `Hi! I'm ${this.name}.`;
};

// Create an object with properties and methods
let person3 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    return `Hi! I'm ${this.name}.`;
  }
});

//////////////////////////////
// Create object based on prototype with create() method
let person4 = Object.create(person3);
console.log(person4.name);
console.log(person4.age);
console.log(person4.greeting());
person3.name = 'kaka'

console.log(person4.name);
console.log(person4.age);
console.log(person4.greeting());



console.log(Object.getPrototypeOf(person4))
console.log(person4.prototype)

a =0
console.log(a)
