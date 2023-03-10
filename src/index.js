const express = require("express");
const morgan = require('morgan')
const cors = require('cors');
require('dotenv').config({path:'./.env'});

//Esto me toco ponerlo por que me estaba mandando un problema con la conexion a la base de datos
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const app = express(); 
const PORT = process.env.PORT || 3000;
app.use(express.json());

const v1UserRouter = require('./routes/userRoutes');
const v1RolesRoutes = require('./routes/rolesRoutes');
const v1BrandRoutes = require('./routes/brandRoutes');
const v1ModelRoutes = require('./routes/modelRoutes');
const v1TypeRoutes = require('./routes/typeRoutes');
const v1StatusUserRoutes = require('./routes/statususerRoutes');

const database = require('./database/database');

//morgan es algo opcionar
app.use(morgan('dev'));

//cors para no tener problemas con peticiones
app.use(cors());

app.use('/api/v1/user/',v1UserRouter);
app.use('/api/v1/role/',v1RolesRoutes);
app.use('/api/v1/brand/',v1BrandRoutes);
app.use('/api/v1/model/',v1ModelRoutes);
app.use('/api/v1/type/',v1TypeRoutes);
app.use('/api/v1/statusUser/',v1StatusUserRoutes);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT} 🚀`); 
});