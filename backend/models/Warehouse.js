const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema({
    warehouse: {
        type: String,
        required: true,
    },
    person: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        // required: true,
    },
    
    phone: {
        type: Number,
        // required: true,
    },
    
    phonew: {
        type: Number,
        
    },
    
    address: {
        type: String,
        // required: true,
    },
    city : {
        type: String,
        // required: true,
    },
    state : {
        type: String,
        // required: true,
    },
    pcode : {
        type: Number,
        // required: true,
    },
    status : {
        type: Boolean,
        // required: true,
    },
    capacity:{
        type: Number,
        required: true,
    },
    items : {
        type : Number,
        required : true,
    }


},{
    timestamps : true,
}
);

module.exports = mongoose.model("Warehouse", warehouseSchema);