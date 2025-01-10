const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, picture } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400)
        throw new Error('User Already Exists With Same Email ID');
    }

    const user = await User.create({ name, email, password, picture });

    if (user) {
        res.status(201)
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            picture: user.picture,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Error Occurred!')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        // check password
        if (await user.matchPassword(password)) {
            // password match
            res.status(200)
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                picture: user.picture,
                token: generateToken(user._id)
            })
        } else {
            // password do not match
            res.status(400)
            throw new Error('Incorrect Password!')
        }
    } else {
        // user not found
        res.status(404)
        throw new Error('User Not Found!')
    }
})



module.exports = { registerUser, loginUser };