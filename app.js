// req ==> middleware ==> res
// we will have access to both req & response. So, we get a req, we implement functionality and send it as a response

const app = require('express')()
var bodyParser = require('body-parser')
const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(bodyParser.json())
app.use('/api/people', people)
app.use('/login', auth)


app.use(require('express').static('./methods-public'))
app.use(bodyParser.urlencoded({extended: false}))


app.listen(5000, ()=>{
  console.log("listening on port 5000...")
})