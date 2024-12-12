let express = require("express");
let route = express.Router();
let body_parser = require("body-parser");
let Users = require("./model");

route.use(body_parser.urlencoded({extended: true}));
route.use(body_parser.json());

route.post('/', async (req, res)=>{
    
    try{
        let newUser = new Users(req.body);
        let saveUser = await newUser.save();
        res.status(201).json(saveUser);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

module.exports = route;