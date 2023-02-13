const typeModel = require('../models/typeModel');

const getTypes = async () =>{
    const data = await typeModel.find({ })
    return data;
}

const createTypes = async (name) =>{
    const data = await typeModel.create({name:name});
    return data;
}

const putTypes = async (_id,body) =>{
    const data = await typeModel.findByIdAndUpdate(_id,body);
    return data;
}

const deleteTypes = async (_id) =>{
    const data = await typeModel.findByIdAndDelete(_id);
    return data;
}

module.exports = {  getTypes ,createTypes ,putTypes ,deleteTypes }