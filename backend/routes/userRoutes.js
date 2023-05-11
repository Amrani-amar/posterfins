import express from 'express';


import * as articleController from '../controllers/articleController.js';
import * as userController from '../controllers/userController.js';
import { userAuthValidation } from '../middelwares/auth.js';


const userRoutes = express.Router();


// Routes pour les users
userRoutes.get("/users", userController.getUsers)
userRoutes.post("/users/register", userController.register)
userRoutes.post("/users/login", userController.login)




// Routes pour les articles
userRoutes.post('/article', userAuthValidation, articleController.createArticle);
userRoutes.get('/article', articleController.getArticle);
userRoutes.put('/article/:id', articleController.updateArticle);
userRoutes.delete('/article/:id', articleController.deleteArticle);



export default userRoutes;