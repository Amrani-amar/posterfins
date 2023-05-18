import express from 'express';


import * as articleController from '../controllers/articleController.js';
import * as userController from '../controllers/userController.js';
import { userAuthValidation } from '../middelwares/auth.js';
import multer from "../middelwares/multer-config.js"

const userRoutes = express.Router();


// Routes pour les users
userRoutes.get("/users", userController.getUsers)
userRoutes.post("/users/register", userController.register)
userRoutes.post("/users/login", userController.login)
userRoutes.post("/users/logout", userController.logout);







// Routes pour les articles
userRoutes.post('/article', userAuthValidation,multer, articleController.createArticle);
userRoutes.get('/article', articleController.getArticle);
userRoutes.get('/article/:id', articleController.getArticleById);

userRoutes.put('/article/:id',userAuthValidation,multer ,articleController.updateArticle);
userRoutes.delete('/article/:id',userAuthValidation,multer ,articleController.deleteArticle);

export default userRoutes;