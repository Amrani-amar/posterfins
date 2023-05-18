import validator from "validator"
import bcrypt from "bcrypt"
import { createToken } from "../middelwares/auth.js"
import { User } from "../models/user.js"

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}
// pour s'enregistrer
export const register = async (req, res) => {
    const {email, password, nom, prenom} = req.body
    console.log({email, password, nom, prenom});
    try {
        const newUser = await User.signup(email, password, nom, prenom)
        console.log(newUser);
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}
//pour l'authauntification :verification des identifiant et creation du token
export const login = async (req, res) => {
    const {email, password} = req.body


    
    try {    
        if (!email || !password){
        throw Error('tout les champs sont requis !')
    }
    
    if (!validator.isEmail(email)) {
        throw Error('email invalide')
    }
        const user = await User.findOne({email})
        if (!user){
            throw Error('utilisateur introuvable!!')
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            throw Error("password invalid")
        }

        const authToken = createToken(user._id)
        res.cookie("authToken", {authToken}, { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 1000 * 3})
        res.status(200).json("login succes")
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}
// Fonction de déconnexion
export const logout = (req, res) => {
    try {
      // Effacer le cookie d'authentification
      res.clearCookie("authToken");
      res.status(200).json({ message: "Déconnexion réussie" });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la déconnexion" });
    }
  };
