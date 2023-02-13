var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('vehicle', vehicleSchema);