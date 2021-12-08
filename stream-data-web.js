const { createReadStream } = require('fs')
const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/file'){
        const stream = createReadStream('./Content/bigfile.txt', {encoding: 'utf-8'})
        
        stream.on('open', ()=>{
            stream.pipe(res)
        })
        
        stream.on('error', () => {
            res.end(err)
        })   
    }

})

server.listen(5000)



