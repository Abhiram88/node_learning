const authorize = (req, res, next) =>{ 
    const {user} = req.query
    if(user === 'ram'){
        req.user = {name: 'Abhiram', id:3}
        console.log("authorize")
        next()
    }
    else{
        res.status(401).send("Unauthorized user")
    }
}

const errors = (req, res, next) => {
    const error_code = res.status
    if(error_code < 400){
        console.log(`Error code ${error_code}`)
        next()
    }
}

module.exports = {authorize, errors}