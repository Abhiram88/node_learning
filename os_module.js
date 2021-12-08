const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user);
//console.log(user.username);

// return system uptime 
console.log(`system uptime is ${os.uptime()/100} mins`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    version: os.version(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS)