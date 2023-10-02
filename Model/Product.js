const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    pName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        default:Date.now()
    }

})

module.exports = mongoose.model('product',productSchema)