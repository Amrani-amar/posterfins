import express from 'express';


import * as commentaireController from '../controllers/commentaireController.js';


const adminRoutes = express.Router();

// Routes pour les tâches
adminRoutes.post('/taches', commentaireController.createTaches);
adminRoutes.get('/taches', commentaireController.getTaches);
adminRoutes.put('/taches/:id', commentaireController.updateTaches);
adminRoutes.delete('/taches/:id', commentaireController.deleteTaches);



export default adminRoutes;