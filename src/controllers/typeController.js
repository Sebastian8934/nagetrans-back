const { httpError } = require('../helpers/handleError');
const  typeService  = require("../services/typeService");

const getType = async (req, res) => {
    try {
        const { name } = req.body;
        const getTypes = await typeService.getTypes( name );
        res.send({ status: "OK", data: getTypes });
    } catch (e) {
        httpError(res, e)
    }
}

const createType = async (req, res) => {
    try {
        const { name } = req.body;
        const createTypes = await typeService.createTypes( name );
        res.send({ status: "OK", data: createTypes });
    } catch (e) {
        httpError(res, e)
    }
}

const putType = async (req, res) => {
    try {
        const { _id } = req.params;
        const putTypes = await typeService.putTypes(_id,req.body);
        res.send({ status: "OK", data: putTypes });
    } catch (e) {
        httpError(res, e)
    }
}

const deleteType = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteTypes = await typeService.deleteTypes(_id);
        res.send({ status: "OK", data: deleteTypes });
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = {  getType, createType, putType, deleteType }