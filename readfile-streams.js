// when we are using sync || async, we are reading the whole file and saving it all to the variable. It takes a lot of memory for big files.
// we create a big file

// const { writeFileSync } = require('fs')
// for(i=0; i<10000; i++){
//     writeFileSync('./content/bigfile.txt', `hello ${i}\n`, {flag: 'a'})
// }

const { createReadStream } = require('fs')
const stream = createReadStream('./Content/bigfile.txt', {encoding: 'utf-8'})

stream.on('data', (result)=>{
    console.log(result)
})

 stream.on('error', (err) => {
     console.log(err)
 })