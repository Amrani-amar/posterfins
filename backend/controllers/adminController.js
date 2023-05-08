import Commentaire from '../models/commentaire.js';



// Fonctions  CRUD sur le modèle Taches

export const createCommentaire = async (req, res) => {
  try {
    const commentaire = new Commentaire(req.body);
    await commentaire.save();
    res.status(201).json(commentaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCommentaire = async (req, res) => {
  try {
    const commentaire = await Commentaire.find({});
    res.status(200).json(commentaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const commentaire = await Commentaire.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!commentaire) {
      return res.status(404).json({ error: 'commentaire not found' });
    }
    res.status(200).json(commentaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const commentaire = await Commenatire.findByIdAndDelete(id);
    if (!commentaire) {
      return res.status(404).json({ error: 'commentaire not found' });
    }
    res.status(200).json({ message: 'commentaire suprimer avec succés ' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}