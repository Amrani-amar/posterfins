
import Article from '../models/article.js';
import fs from 'fs';


export const createArticle = async (req, res) => {
  
  const userId = res.locals.userId;
  
  const { titre, description } =  req.body;
  const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null;

  try {
    const article = await Article.create({ titre, description, user: userId, image: imageUrl });
    console.log(article);
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// récuperer tous les articles
export const getArticle = async (req, res) => {
  try {
    const article = await Article.find();
    res.status(200).json(article);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// récuperer un article
export const getArticleById = async (req, res) => {
  try {
    const { id } = req.params; // on recupere l'Id de l'article
    const article = await Article.findById(id); // recherche s'il est dans la BD
    if (!article) throw new Error('article introuvable');
    res.status(200).json(article);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// mettre à jour un article
export const updateArticle = async (req, res) => {
  console.log("here");
  try {
    const { id } = req.params;  // on récupère l'ID de l'article
    const article = await Article.findById(id);  // recherche s'il est dans la BD
    if (!article) throw new Error('article introuvable');

    // vérifier que l'utilisateur qui veut modifier l'article est le propriétaire
    if (article.user != res.locals.userId) {
      throw new Error('accès refusé:  Dégage');
    }
    // récupérer les nouvelles données (à partir de req.body)
    const { titre, description } = req.body; 
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null;

    // mise à jour de l'article avec les nouvelles valeurs
    article.titre = titre;
    article.description = description;
    article.image = imageUrl;
    
    
    const updatedArticle = await article.save(); // enregistrement de la mise à jour de l'article
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteArticle = async (req, res) => {
  const userId = res.locals.userId;
  
  try {
    
    const { id } = req.params;
    const article = await Article.findById(id);
    if (!article) throw new Error('article introuvable');

    if (article.user != userId) {
      throw new Error('accès refusé');
    }

    // Supprimer l'image associée s'il existe
    if (article.image) {
      const imagePath = article.image.replace(`${req.protocol}://${req.get('host')}`, '');
      fs.unlinkSync(`./${imagePath}`);
    }

    await article.deleteOne();

    res.status(200).json({ message: 'article supprimé !!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};