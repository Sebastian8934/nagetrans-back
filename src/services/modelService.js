const modelVehicleModel = require('../models/modelVehicleModel');

const getModels = async () =>{
    const data = await modelVehicleModel.find({ })
    return data;
}

const createModels = async (name) =>{
    const data = await modelVehicleModel.create({name:name});
    return data;
}

const putModels = async (_id,body) =>{
    const data = await modelVehicleModel.findByIdAndUpdate(_id,body);
    return data;
}

const deleteModels = async (_id) =>{
    const data = await modelVehicleModel.findByIdAndDelete(_id);
    return data;
}

module.exports = {  getModels ,createModels ,putModels ,deleteModels }