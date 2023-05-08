
import Commentaire from '../models/commentaire.js';

// créer un commentaire
export const createCommentaire = async (req, res) => {
  try {
   
    
    const commentaire =  await Commentaire.create(req.body);
    res.status(201).json(commentaire);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récupérer tous les commentaires
export const getCommentaire = async (req, res) => {
  try {
    const commentaire = await Commentaire.find();
    res.status(200).json(taches);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Récupérer un commentaire 
export const getCommentaireById = async (req, res) => {
  try {
    const { id } = req.params;
    const commentaire = await Commentaire.findById(id);
    if (!commentaire) throw new Error('commentaire introuvable');
    res.status(200).json(commentaire);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// metre a jour un commentaire
export const updateCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const tache = await Commentaire.findByIdAndUpdate(id, req.body, { new: true });
    if (!tache) throw new Error('commentaire introuvable');
    res.status(200).json(commentaire);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un commentaire
export const deleteCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const commentaire = await Commentaire.findByIdAndRemove(id);
    if (!commentaire) throw new Error('commentaire introuvable');
    res.status(200).json({ message: 'commentaire supprimée avec succès' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};