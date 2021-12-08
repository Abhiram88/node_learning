const express = require('express')
const router = express.Router()
const {people} = require('../data')


// get method
router.get('/', (req, res) => {
    res.status(200).json({success:true, data:people})
  })
  
//post -- from javascript.html
// router.post('/', (req, res) =>{
// const {name} = req.body
// if(name){
//     return res.status(201).json({success: true, person: name})  
// }
// return res.status(400).json("please enter name")
// })

// //sample - for postman
// router.post('/postman', (req, res) => {
// const {name} = req.body
// if(name){
//     return res.status(201).json({success: true, data: [...people, name]})  
// }
// return res.status(400).json("please enter name")
// })

//put
router.put('/:id', (req, res) => {
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


//delete
router.delete('/:id', (req, res) => {
const {id} = req.params
//const {name} = req.body
//console.log(id, name)

const person = people.find((person) => person.id === Number(id))
if(!person){
    return res.status(400).json({sucess: false, msg: `Unable to locate person with id ${id}`})
}
const new_people = people.filter((person) => person.id !== Number(id));
return res.status(200).json({status: true, data: new_people})
})

module.exports = router