const { response } = require("express")


const userController =(entityFunction)=>{
   return (req,res)=>{
    entityFunction(req)
    .then(response=>{
        res.status(response.status || 200).send(response)
    })
    .catch(err=>{
        res.status(400).send(err.message)
    })
   }
}

module.exports = userController;