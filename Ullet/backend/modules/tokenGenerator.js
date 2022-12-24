import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

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

export async function verifyToken(req, res) {
  try {
    //Obtenemos el token del encabezado
    const { token } = req.headers;

    //Verificamos el token para obtener el nombre del usuario que lo firmo
    const name = jwt.verify(token, privateKey).name;

    //Encontramos la información del usuario que corresponde con el nombre
    const user = await userModel.findOne({ name: name });
    if (!user) return res.sendStatus(401);

    //Devolvemos el usruario como respuesta de la petición
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
