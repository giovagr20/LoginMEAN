const mongoose = require('mongoose');
const authSchema = require('./auth.model');
const URI = 'mongodb://localhost/LoginMEAN';

authSchema.statics = {
    create: (data, cb)=>{
        const user = new this(data)
        user.save(cb);
    },
    login: (query, cb)=>{
        this.find(query, cb);
    }
}

const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;