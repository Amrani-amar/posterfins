import mongoose from 'mongoose';
import validator from "validator"
import bcrypt from 'bcrypt';




const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  email:{
    type:String,
    required: true,
    unique: true
  },
  password: {
    type:String,
    required: true,
    unique: true
  }  
});

userSchema.statics.signup = async function (email, password, nom, prenom) {
  if (!email || !password || !nom || !prenom){
    throw Error('all fields are required !')
}



if (!validator.isEmail(email)) {
  throw Error('invalid email')
}



if (!validator.isStrongPassword(password)) {
    throw Error('you should send a strong password !')
}


const exists = await this.findOne({email})
if (exists){
    throw Error('Email existe')
}

const salt =await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password , salt)

const newUser = await this.create({email, password:hashedPassword, nom, prenom})
console.log(newUser);


return newUser
}

export const User = mongoose.model('User', userSchema); 