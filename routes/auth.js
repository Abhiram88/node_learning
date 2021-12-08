const express = require('express')
const router = express.Router()
const alert = require('alert')

router.post('/', (req, res) => {
    //res.send(req.body)
    const {name} = req.body
    if(name){
      return res.status(200).send(` Welcome ${name}`)
    }
    return res.status(400).send(` unable to welcome ${name}`)
  })

module.exports = router