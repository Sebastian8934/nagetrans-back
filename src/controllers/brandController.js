const { httpError } = require('../helpers/handleError');
const  brandService  = require("../services/brandService");

const getBrand = async (req, res) => {
    try {
        const { name } = req.body;
        const getBrands = await brandService.getBrands( name );
        res.send({ status: "OK", data: getBrands });
    } catch (e) {
        httpError(res, e)
    }
}

const createBrand = async (req, res) => {
    try {
        const { name } = req.body;
        const createBrands = await brandService.createBrands( name );
        res.send({ status: "OK", data: createBrands });
    } catch (e) {
        httpError(res, e)
    }
}

const putBrand = async (req, res) => {
    try {
        const { _id } = req.params;
        const putBrands = await brandService.putBrands(_id,req.body);
        res.send({ status: "OK", data: putBrands });
    } catch (e) {
        httpError(res, e)
    }
}

const deleteBrand = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteBrands = await brandService.deleteBrands(_id);
        res.send({ status: "OK", data: deleteBrands });
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = {  getBrand, createBrand, putBrand, deleteBrand }