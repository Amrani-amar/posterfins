import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tacheSchema = new Schema({
 
  description: {
    type: String,
    default:"rien",
    required: true
  },
  
  
  statut: {
    type: String,
    enum: ['En cours', 'Terminé'],
    default: 'En cours'
  }
},{timestamps:true});

export default mongoose.model('Commentaire', commentaireSchema);