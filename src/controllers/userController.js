const { httpError } = require('../helpers/handleError');
const  userService  = require("../services/userService");
const { encrypt, compare } = require('../helpers/handleBcrypt');

const registerUser = async (req, res) => {
    try {
        const { user,email,dni,names,surname,phoneNumber,password,brand,roles } = req.body;
        const users = await userService.userExisting(user);

        if(users){
            console.log("usuario ya creado");
            res.send({ status: "FAILED" , data:"usuario ya creado" })
            return;
        }

        const passwordHash = await encrypt(password);
        const registerUsers = await userService.registerUsers( user,email,dni,names,surname,phoneNumber,passwordHash,brand,roles );
        res.send({ status: "OK", data: registerUsers });

    } catch (e) {
        httpError(res, e)
    }
}

const validateToken = async (req,res) =>{
    try {   
        res.send({ status: "OK", data:"true"  });
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { registerUser , validateToken }