
import Article from '../models/article.js';

// créer un article
export const createArticle = async (req, res) => {
  const userId = res.locals.userId
  console.log(userId);
  const {titre, description} = req.body
  try {
    const article =  await Article.create({titre, description, user: userId});
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  } 
};

// Récupérer tous les articles
export const getArticle = async (req, res) => {
  try {
    const article = await Article.find();
    res.status(200).json(article);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Récupérer un article
export const getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    if (!article) throw new Error('article introuvable');
    res.status(200).json(article);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// metre a jour un article
export const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByIdAndUpdate(id, req.body, { new: true });
    if (!article) throw new Error('article introuvable');
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un article
export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByIdAndRemove(id);
    if (!article) throw new Error('article introuvable');
    res.status(200).json({ message: 'article supprimée avec succès' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};