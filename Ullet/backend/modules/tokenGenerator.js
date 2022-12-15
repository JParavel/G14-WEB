import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

const privateKey = process.env.PRIVATE_KEY

export function genToken(element) {
    // @ts-ignore
    return jwt.sign(element, privateKey)
}