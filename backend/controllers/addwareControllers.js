const addware = require("../models/addware");

const createware = async (req,res)=>{
    try {
        const newware = new addware(req.body);
        await newware.save();
        res.status(201).json(newware);
    } catch (err) {
        res.status(400).json({error : err.message});
    }
}

const getware = async (req, res)=>{
    try {
        const ware = await addware.find();
        res.status(201).json(ware);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
}

module.exports = {createware, getware};