const brandModel = require('../models/brandModel');

const getBrands = async () =>{
    const data = await brandModel.find({ })
    return data;
}

const createBrands = async (name) =>{
    const data = await brandModel.create({name:name});
    return data;
}

const putBrands = async (_id,body) =>{
    const data = await brandModel.findByIdAndUpdate(_id,body);
    return data;
}

const deleteBrands = async (_id) =>{
    const data = await brandModel.findByIdAndDelete(_id);
    return data;
}

module.exports = {  getBrands ,createBrands ,putBrands ,deleteBrands }