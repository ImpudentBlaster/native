const { resetCache } = require('../../metro.config')
const userSchema = require('../Models/userSchema')

const signUp = async (req,res) =>{
    try {
        const registeredUser = await userSchema.findOne({email: req.body.email});
        if(registeredUser) return res.status(400).send("User is already registered")
    const data = new userSchema(req.body);
    await data.save();
    res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const login = async (req,res)=>{
    try {
        const data = await userSchema.login(req.body.email , req.body.password);
          res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}

const loginThroughGoogle = async (req,res)=>{
    console.log("login in through google")
    try {
        console.log(req.body)
        const data = await userSchema.loginThroughGoogle(req.body.email , req.body.idToken , req.body.username);
     res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}
exports.loginThroughGoogle = loginThroughGoogle
exports.login = login
exports.signUp = signUp