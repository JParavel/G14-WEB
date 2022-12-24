import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import { genToken } from "./tokenGenerator.js";

export async function login(req, res) {
  try {
    const { name, password } = req.headers;

    const document = await userModel.findOne({ name: name });

    const access = await bcrypt.compare(password, document.password);
    if (access) {
      const token = genToken({ name: name });
      res.status(200).json({ token: token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(401).json(error.message);
  }
}
