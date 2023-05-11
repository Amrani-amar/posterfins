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

export const register = async (req, res) => {
    const {email, password, nom, prenom} = req.body
    try {
        const newUser = await User.signup(email, password, nom, prenom)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body

    if (!email || !password){
        throw Error('all fields are required !')
    }
    
    if (!validator.isEmail(email)) {
        throw Error('invalid email')
    }
    
    try {
        const user = await User.findOne({email})
        if (!user){
            throw Error('user not found!')
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            throw Error("password invalid")
        }

        const authToken = createToken(user._id)
        res.cookie("authToken", {authToken}, { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 1000 * 3})
        res.status(200).json("login succes")
    } catch (error) {
        res.status(400).json(error)
    }


}