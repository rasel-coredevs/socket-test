const { create, find } = require("../mongodb/operations");
const User = require("../mongodb/schemas/userSchema");


const createUser =async(req)=>{
    try{
      let newUser = new User(req.body);
      let result = await create(newUser);
      return result;
    }catch(err){
        throw new Error(err);
    }
};

const findUser =async(req)=>{
    try{
        /* let query = {email:{$ne:req.query.email}}; */
        let result = await find(User);
        return result;
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {createUser,findUser};