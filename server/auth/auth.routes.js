const Users = require('./auth.controller');
//const express = require('express');
//const router = express.Router();

module.exports = (router)=>{
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
}