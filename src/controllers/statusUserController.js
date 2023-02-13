const { httpError } = require('../helpers/handleError');
const  statusUserService  = require("../services/statusUserService");

const getStatusUser = async (req, res) => {
    try {
        const { name } = req.body;
        const getStatusUsers = await statusUserService.getStatusUsers( name );
        res.send({ status: "OK", data: getStatusUsers });
    } catch (e) {
        httpError(res, e)
    }
}

const createStatusUser = async (req, res) => {
    try {
        const { name } = req.body;
        const createStatusUsers = await statusUserService.createStatusUsers( name );
        res.send({ status: "OK", data: createStatusUsers });
    } catch (e) {
        httpError(res, e)
    }
}

const putStatusUser = async (req, res) => {
    try {
        const { _id } = req.params;
        const putStatusUsers = await statusUserService.putStatusUsers(_id,req.body);
        res.send({ status: "OK", data: putStatusUsers });
    } catch (e) {
        httpError(res, e)
    }
}

const deleteStatusUser = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteStatusUsers = await statusUserService.deleteStatusUsers(_id);
        res.send({ status: "OK", data: deleteStatusUsers });
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = {  getStatusUser, createStatusUser, putStatusUser, deleteStatusUser }