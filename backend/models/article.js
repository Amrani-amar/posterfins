import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  titre:{
    type:String,
    required:true

  },
 
  description: {
    type: String,
    default:"rien",
    required: true
  },
  image: {
    type: String,
    required: true
  },

  user:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
  
},{timestamps:true});


export default mongoose.model('Article', articleSchema); 
