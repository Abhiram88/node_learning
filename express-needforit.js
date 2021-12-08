// const http = require('http')

// const server = http.createServer((req, res)=>{
//   console.log("reached server")  
//   res.end("Home page")
// })
// server.listen(5000)

// we dont have any info or meta data regarding the info we are sending as response.
// when we try to use routes like http://localhost:5000/contact, we will send out the same result.

const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
  // home page
  if(req.url === '/'){
    res.writeHead(200, {'content-type': 'text/html'}) 
    res.write(homePage)
    res.end()
  }
  // about page
  else if(req.url == '/about'){
    res.writeHead(200, {'content-type': 'text/html'}) 
    res.write("<h3> About page </h3>")
    res.end()
  }
  // styles
  else if(req.url == '/styles.css'){
    res.writeHead(200, {'content-type': 'text/css'}) 
    res.write(homeStyle)
    res.end()
  }
  // logos
  else if(req.url == '/logo.svg'){
    res.writeHead(200, {'content-type': 'image/svg+xml'}) 
    res.write(homeLogo)
    res.end()
  }
  // logos
  else if(req.url == '/browser-app.js'){
    res.writeHead(200, {'content-type': 'text/javascript'}) 
    res.write(homeLogic)
    res.end()
  }
  // error page
  else{
    res.writeHead(400, {'content-type': 'text/html'}) 
    res.write("<h3> Resource doesn't exist </h3>")
    res.end()
  }
})
server.listen(5000)


