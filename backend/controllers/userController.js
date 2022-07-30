const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

//Generate JWT 
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}

//@Register User - @POST /api/user - @public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    //check if all text field has value
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please fill the text field')
    }

    //check if user already exists
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('user already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    }

})

//@Authenticate user - @POST /api/user/login - @public
const loginUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    const user = await User.findOne({email})
    
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    }else{
        res.status(400)
        throw new Error("hellow")
    }
})


//@Get User - @GET api/user/me - @private
const getMe = asyncHandler(async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}