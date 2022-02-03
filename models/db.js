const mongoose = require('mongoose')
mongoose.connect('API',{useNewUrlParser:true},(err)=>{
    if(!err) console.log('connected!');
    else console.log(err);
})

require('./user.model')
require('./otp.model')
require('./userVehicle.model')
require('./package.model')
require('./brand.model')
require('./time.model')
require('./image.model')
require('./service.model')
require('./cleaner.model')
require('./temp.model')
require('./user.temp.model')
require('./track.model')
require('./code.model')
