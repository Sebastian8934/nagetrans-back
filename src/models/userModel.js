var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    user:Number,
    email:String,
    dni:Number,
    names:String,
    surname:String,
    phoneNumber:Number,
    password: String,
    brand:{
        ref:"brand",
        type:Schema.Types.ObjectId
    },
    model:{
        ref:"model",
        type:Schema.Types.ObjectId
    },
    type:{
        ref:"type",
        type:Schema.Types.ObjectId
    },
    roles:[{
        ref:"role",
        type:Schema.Types.ObjectId
    }],
    status:{
        ref:"statusUser",
        type:Schema.Types.ObjectId
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('user', userSchema);