const sayHi = (key)=>{
    console.log(`hello ${key}`);
}

let person = {
    name: 'ram',
    age: 33
}


//module.exports = sayHi
module.exports.singleFun = sayHi
module.exports.personDetails = person
module.exports.items = ['item1', 'items2']