const mongoose = require('mongoose');
const URI = require('./properties').DB;

module.exports = ()=>{
    mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log(`DB Connected on ${URI}`))
    .catch( err => console.log(`Error connection ${err}`))

    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log(`DB disconnected`);
            process.exit(0)
        });
    })
}