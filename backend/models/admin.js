import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
 
 
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
  }
  
});

export default mongoose.model('Admin', adminSchema); 