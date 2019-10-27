'use strict'

const cors = require('cors');
const express = require('express');
const app = express();
const properties = require('./config/properties');
const authRoutes = require('./auth/auth.routes');
const router = express.Router();
const DB = require('./config/database');
DB();

authRoutes(router);

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//SERVER RUN
router.get('/', (req, res)=>{
    res.send('HI');
});

app.use(router);
app.use('/api', router);
app.listen(properties.PORT, (req,res)=>{
    console.log(`Server in running on port: ${properties.PORT}`);
})