const app = require('express')()
const path = require('path')
//const app = express()

// setup static & middleware
app.use(require('express').static('./public'))

// index.html can be a part of static assests. we can add index.html to th public folder
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.get('*', (req, res)=>{
  res.status(404).send("<h2> Resource not found </h2>")
})

app.listen(5000, ()=>{
  console.log("server is listening on port 5000...")
})

