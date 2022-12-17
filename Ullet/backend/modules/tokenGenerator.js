import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;

export function genToken(element) {
  const token = jwt.sign(element, privateKey);
  // @ts-ignore
  return token;
}

export function validateToken(req, res, next) {
  try {
    const { token } = req.headers;
    const value = jwt.verify(token, privateKey);
    req.value = value;
    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
}
