// req ==> middleware ==> res
// we will have access to both req & response. So, we get a req, we implement functionality and send it as a response

const app = require('express')()
const logger = require("C:/Users/user/Documents/JavaScript/node_tutorial/logger.js")
//app.use(logger) // app.use will invoke logger for any route
// app.use('/api', logger) // applicable to routes with /api
//app.use([logger, authorize]) // app.use will invoke logger for any route // our own middleware. (express.static is built in middleware)
app.use(morgan('tiny')) // third party middleware. 

 // moved to logger.js
// const logger = (req, res, next) =>{
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time)
//   next()
//   // when you are using middleware, you have to pass the control to the next middleware function or we terminate it manually using res.send()
// }

app.get('/', logger, (req, res) => {
  // mentioning the same for all routes is impractical. so we create a function instead
  // const method = req.method;
  // const url = req.url;
  // const time = new Date().getFullYear();
  // console.log(method, url, time)
  console.log(req.user)
  res.send("Home")
})

app.get('/about', (req, res) => {
  res.send("About")
})

app.get('/api/products', logger, (req, res) => {
  res.send("Products")
})

app.listen(5000, ()=>{
  console.log("listening on port 5000...")
})