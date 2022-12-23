import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

export async function createUser(req, res) {
  try {
    const { user } = req.body;
    let { password } = user;

    password = await bcrypt.hash(password, 10);
    user.password = password;

    const document = await userModel.create(user);

    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export function getUser(req, res) {}

export function updateUser(req, res) {}

export function deleteUser(req, res) {}
