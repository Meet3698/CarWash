const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
   name : {
       type : String
   }
})

mongoose.model('Image',imageSchema)