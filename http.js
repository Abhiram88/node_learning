const http = require('http')
const server = http.createServer((req, res)=>{
    //console.log(req)
    if (req.url === '/'){
        res.end("Welcome to our home page")
    }
    if (req.url === '/about'){
        res.end("About page")
    }
    res.end(`
        <html>
            <h1> OOPS!!!</h1>
            <h3> "Page not found" </h3>
            <a href='/'>Back home</a>
        </html>
    `)
})
server.listen(5000)
/*
const http = require('http')
const server = http.createServer((req, res) => {
    console.log("Server call executed")
    if (req.url === '/'){
        res.end('Home page')
    }
    if (req.url === '/about'){
        // BLOCKING CODE -- Synchornous.. This code will prevent us from loading "home page" or any other page. The server wont be able to accept other request until the loop is complete
        for (i=1; i<100; i++){
            for (j=1; j<100; j++){
                console.log(`${j}`)
            }
        }
        res.end('About page')
    }
    res.end(` <html>
           <p> "Oops!!! Page not found..." </p>
        </html> `)
})

server.listen(5000, ()=>{
    console.log("Server is listening")
})
*/