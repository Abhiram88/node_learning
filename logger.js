const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    next()
    // when you are using middleware, you have to pass the control to the next middleware function or we terminate it manually using res.send()
  }

  module.exports = logger