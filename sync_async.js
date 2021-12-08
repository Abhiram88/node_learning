/*  Sync
const { readFileSync, writeFileSync } = require('fs') 

// can also be written as 
//const read = require('fs')
//read.readFileSync()

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', 
`Hello. The result is ${first} and ${second}`, {flag: 'a'})

*/

// Async
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8',(err, result)=>{
if(err){
    console.log("error")
    return
}
const first = result
readFile('./content/second.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log("error")
        return
    }
const second = result

writeFile('./content/write-async.txt', `The result is ${first} and ${second}`, (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)
})
})
})

