const mongoose = require("mongoose");
const Warehouse = require("./Warehouse");

const addwareSchema = new mongoose.Schema({
    Warehouse:{
        type : String,
        required: true,
    },
    person : {
        type:String,
        required:true,
    },
    email : {
        type : String,
        required: true,
    },
    phone : {
        type : String,
        required: true,
    },
    phonew :{
        type:String,
    },
    address : {
        type : String,
        required:true
    },
    city : {
        type:String,
        
    },
    state :{
        type:String,
        required: true,
    },
    country : {
        type:String,
        required: true,
    },
    pcode :{
        type:String,
        required: true,
    },
    status :{
        type : Boolean,
        default: true,
    },
   },
     {
        timestamps : true,
    }
);
const warehouseSchem = mongoose.model("addware",addwareSchema);
module.exports = warehouseSchem;