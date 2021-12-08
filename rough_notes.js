console.log(__dirname);

const name = require('./utils')
console.log(name.name);

const sayHi = require('./file')

console.log(sayHi);
//sayHi(name.name);
console.log(sayHi.singleFun(name.name));
console.log(sayHi.singleFun(sayHi.personDetails.name));