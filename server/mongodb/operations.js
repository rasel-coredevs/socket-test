
const create = async(model)=>{
    try{
     let result = await model.save();
     return result;
    }catch(err){
        throw new Error(err)
    }
};

const find = async(model,query={})=>{
    try{
        let result = await model.find(query);
        return result;
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {create,find};