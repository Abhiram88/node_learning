const EventEmitter = require('events')
const customEmmiter = new EventEmitter()

customEmmiter.on('response', ()=>{
    console.log(`Data received`)
})
customEmmiter.on('response', (name, id)=>{
    console.log(`${name} and ${id}`)
})

customEmmiter.emit('response', 'ram', '34')