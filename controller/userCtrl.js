// const userModel = require("../models/userModel.js");
const User = require("../models/userModel");    //exported from userModules.js


// for checking if the user is alreday exists
const createUser = async (req,res) => {
    const email= req.body.email;
    const findUser = await User.findOne({email: email });
    if(!findUser) {
        //Create a new User
        const newUser =User.create(req.body);
        res.json(newUser);
    } else {
        //User Already Exists
        res.json({
            msg:"User already Exists",
            success: false,      // status of the user
        });
    }
};

module.exports = {createUser};