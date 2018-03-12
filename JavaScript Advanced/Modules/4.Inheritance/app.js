let Entity = require('./entity');
let Dog = require('./dog');
let Person = require('./person');
let Student = require('./student');

let dog = new Dog('Sharo');
console.log(dog.saySomething());
let person = new Person('Dimityr', 'I love my dog.', dog);
console.log(person.saySomething());
let student = new Student('Ivan', 'My favourite subject is Math.', dog, 7891);
console.log(student.saySomething());
