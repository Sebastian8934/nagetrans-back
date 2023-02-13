const url = require('../config/config.json');
const mongoose = require('mongoose');
require('dotenv').config({path:'../../.env'});

mongoose.connect(process.env.urlDatabaseProd,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log('Error connecting database ' + error))