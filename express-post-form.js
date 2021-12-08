// req ==> middleware ==> res
// we will have access to both req & response. So, we get a req, we implement functionality and send it as a response

const app = require('express')()
const {people} = require('./data')
const alert = require('alert')


//static assets
app.use(require('express').static('./methods-public'))
// parse the data - get form data
app.use(require('express').urlencoded({extended: false}))
// get method
app.get('/api/people', (req, res) => {
  res.status(200).json({success:true, data:people})
})

//post -- from index.html
app.post('/login', (req, res) => {
  //res.send(req.body)
  const {name} = req.body
  if(name){
    return res.status(200).send(` Welcome ${name}`)
  }
  alert('Please enter name')
})


app.listen(5000, ()=>{
  console.log("listening on port 5000...")
})