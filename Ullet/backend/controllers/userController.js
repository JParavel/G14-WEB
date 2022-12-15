import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"
import { genToken } from "../modules/tokenGenerator.js"

export async function createUser(req, res) {

    try {

        const { user } = req.body
        let { password } = user

        password = await bcrypt.hash(password, 10)
        user.password = password

        const document = await userModel.create(user)

        res.status(201).json(document)

    } catch (error) {
        res.status(400).json(error.message)
    }

}

export async function login(req, res) {

    try {

        const { name, password } = req.headers

        const document = await userModel.findOne({ name })

        if (!document) return res.sendStatus(401)

        if (await bcrypt.compare(password, document.password)) {
            const userID = { _id: document._id }
            return res.status(200).json(genToken(userID))
        }

        res.sendStatus(401)

    } catch (error) {
        res.status(400).json(error.message)
    }

}

export function getUser(req, res) {

}

export function updateUser(req, res) {

}

export function deleteUser(req, res) {

}