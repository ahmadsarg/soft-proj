const mongoose = require('mongoose');
mongoose.connect(process.env.MongodbUrl, (err)=>{
    if(!err){console.log('Mongodb connection established:');}
    else{console.log('error connection :'+JSON.stringify(err,undefined,2));}
});

require('./users.model')