//Importar dependencias del módulo
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Usar dotenv como el manejador de variables de entorno
dotenv.config();

//Llave secreata para generar los token
const secretKey = process.env.SECRET_KEY;

export async function register(req, res) {
  try {
    const { user } = req.body;

    //Extraemos la contraseña del objeto usuario,
    //la encriptamos y se la reasignamos con el
    //nuevo valor...
    let password = user.password;
    password = await bcrypt.hash(password, 10);
    user.password = password;

    //Creamos el nuevo usuario en la coleccion
    const document = await userModel.create(user);
    res.status(200);
    res.json(document);
  } catch (error) {
    console.log(error.message);
    res.status(400);
    res.json(error.message);
  }
}
export async function login(req, res) {
  try {
    const { username, password } = req.headers;

    console.log(username);
    console.log(password);

    //Consultar si exite un usuario con ese nombre de usuario
    const user = await userModel.findOne({ userName: username });
    //Si no existe ese nombre de usuario negamos el acceso
    if (!user) return res.sendStatus(401);

    //Si existe ese usuario, comparamos las contraseñas
    const access = await bcrypt.compare(password, user.password);
    //Si las contraseñas no existen negamos el acceso
    if (!access) return res.sendStatus(401);

    //Si las contraseñas existen generamos un token y lo enviamos
    const token = jwt.sign({ _id: user._id }, secretKey);
    res.status(200);
    res.json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400);
    res.json(error.message);
  }
}

export async function validateToken(req, res, next) {
  try {
    //Tomamos el token de los headers de la petición
    const token = req.headers;

    //Decodificamos el token
    const document = jwt.verify(token, secretKey);

    //Encontramos un usuario con la id que se encontraba en el documento decodificado
    const user = await userModel.findById(document._id);

    //Si no hay un usuario que corresponda con esa id, negamos la autorizacion
    if (!user) return res.sendStatus(401);

    //Pasamos el usuario a través de la peticion
    req.user;
    next();
  } catch (error) {
    res.status(401);
    res.json(error.message);
  }
}
