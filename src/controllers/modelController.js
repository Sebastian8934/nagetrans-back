const { httpError } = require('../helpers/handleError');
const  modelService  = require("../services/modelService");

const getModel = async (req, res) => {
    try {
        const { name } = req.body;
        const getModels = await modelService.getModels( name );
        res.send({ status: "OK", data: getModels });
    } catch (e) {
        httpError(res, e)
    }
}

const createModel = async (req, res) => {
    try {
        const { name } = req.body;
        const createModels = await modelService.createModels( name );
        res.send({ status: "OK", data: createModels });
    } catch (e) {
        httpError(res, e)
    }
}

const putModel = async (req, res) => {
    try {
        const { _id } = req.params;
        const putModels = await modelService.putModels(_id,req.body);
        res.send({ status: "OK", data: putModels });
    } catch (e) {
        httpError(res, e)
    }
}

const deleteModel = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteModels = await modelService.deleteModels(_id);
        res.send({ status: "OK", data: deleteModels });
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = {  getModel, createModel, putModel, deleteModel }