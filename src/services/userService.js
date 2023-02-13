const userModel = require('../models/userModel');

const registerUsers = async (user,email,dni,names,surname,phoneNumber,passwordHash,brand,roles) =>{
    const data = await userModel.create({
        user:user,
        email:email,
        dni:dni,
        names:names,
        surname:surname,
        phoneNumber:phoneNumber,
        password:passwordHash,
        brand:brand,
        roles:roles
    });
    return data;
}

const userExisting = async (user) =>{
    const data = await userModel.findOne({ user })
    return data;
}

module.exports = {
    registerUsers,
    userExisting
}