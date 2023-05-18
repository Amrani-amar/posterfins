

import mongoose from 'mongoose';
import validator from 'validator';
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
    required: true
  }  
});

userSchema.statics.signup = async function (email, password, nom, prenom) {
  console.log("here");
  if (!email || !password || !nom || !prenom){
    throw new Error('all fields are required !');
  }

  if (!validator.isEmail(email)) {
    console.log("mail");
    throw new Error("invalid email");
  }

  if (!validator.isStrongPassword(password)) {
    console.log("password");
    throw new Error('you should send a strong password !');
  }

  const exists = await this.findOne({ email });
  if (exists){
    console.log("exists");
    throw new Error('Email already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
console.log(hashedPassword);
  const newUser = await this.create({ email, password: hashedPassword, nom, prenom });

  console.log({newUser});

  return newUser;
};

export const User = mongoose.model('User', userSchema);
