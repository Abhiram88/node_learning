// req ==> middleware ==> res
// we will have access to both req & response. So, we get a req, we implement functionality and send it as a response

const app = require('express')()
const {people} = require('./data')
const alert = require('alert')


//static assets
app.use(require('express').static('./methods-public'))
// parse the data - POST from form data
app.use(require('express').urlencoded({extended: false}))
// parse data - POST from JS; we will get data from JS in the form of json. So, we use the below middleware
app.use(require('express').json())

// get method
app.get('/api/people', (req, res) => {
  res.status(200).json({success:true, data:people})
})

//post -- from javascript.html
app.post('/api/people', (req, res) =>{
  const {name} = req.body
  if(name){
    return res.status(201).json({success: true, person: name})  
  }
  return res.status(400).json("please enter name")
})

//sample - for postman
app.post('/api/postman/people', (req, res) => {
  const {name} = req.body
  if(name){
    return res.status(201).json({success: true, data: [...people, name]})  
  }
  return res.status(400).json("please enter name")
})

//put
app.put('/api/people/:id', (req, res) => {
  const {id} = req.params
  const {name} = req.body
  //console.log(id, name)

  const person = people.find((person) => person.id === Number(id))
  if(!person){
    return res.status(400).json({sucess: false, msg: `Unable to locate person with id ${id}`})
  }
  const new_people = people.map((person) => {
    if(person.id === Number(id)){
      person.name = name
    }
    return person
  })
  res.status(200).json({status: true, data: new_people})
})


/delete
app.delete('/api/people/:id', (req, res) => {
  const {id} = req.params
  const {name} = req.body
  //console.log(id, name)

  const person = people.find((person) => person.id === Number(id))
  if(!person){
    return res.status(400).json({sucess: false, msg: `Unable to locate person with id ${id}`})
  }
  const new_people = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({status: true, data: new_people})
})

app.listen(5000, ()=>{
  console.log("listening on port 5000...")
})