//fields => 
//name{string,required},
//model:{string,required}
//color:String,
//passenger:{number,required}
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    color:String,
    passenger:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const Car = mongoose.model('Car',carSchema);

module.exports = Car;