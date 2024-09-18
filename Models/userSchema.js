const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userData = mongoose.Schema({
    username:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:false
    },
    idToken:{
        type:String,
        required:false
    }
})

userData.pre('save' , async function(next){
    if(this.password){
        console.log("pre save function")
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password , salt)
        next();
    }
    else {
        next();
    }
})

userData.statics.login = async function (email , password) {
    const user = await this.findOne({email:email});
    if(user){

       const auth = await bcrypt.compare(password , user.password);
 
       if(auth) return user;
       else {
        throw new Error("Invalid Email or Password")
       }
    }else {
        throw new Error("Invalid Email or Password")
    }
}

userData.statics.loginThroughGoogle = async function (email ,idToken,username) {
  const user = await this.findOne({email : email})

  if(user) {
     user.idToken = idToken ;
     await user.save();
     return user ;
  }else {
    const data = new this({email:email , idToken:idToken , username:username})
    await data.save();

    return data;
  }
}

const userSchema = mongoose.model("userSchema" , userData);
module.exports = userSchema