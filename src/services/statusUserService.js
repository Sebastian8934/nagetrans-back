const statusUserModel = require('../models/statusUserModel');

const getStatusUsers = async () =>{
    const data = await statusUserModel.find({ })
    return data;
}

const createStatusUsers = async (name) =>{
    const data = await statusUserModel.create({name:name});
    return data;
}

const putStatusUsers = async (_id,body) =>{
    const data = await statusUserModel.findByIdAndUpdate(_id,body);
    return data;
}

const deleteStatusUsers = async (_id) =>{
    const data = await statusUserModel.findByIdAndDelete(_id);
    return data;
}

module.exports = {  getStatusUsers ,createStatusUsers ,putStatusUsers ,deleteStatusUsers }