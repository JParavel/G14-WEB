import userModel from "../models/userModel.js";

//CREATE
export async function createUser(req, res){
    const usuario = req.body;

    let documento = null

    try {
        documento = await userModel.create(usuario)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(201)
    res.json(documento)
}

//READ
export async function readUser(req, res){

    const {nombre, ciudad} = req.params
    let documento = null;

    try {
        documento = await userModel.find({
            nombre,
            ciudad
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

//Update
export async function updateUser(req, res){
    const {id} = req.params
    let documento = null;

    try {
        documento = await userModel.findOne({
            "_id": id
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    documento.edad = 999
    documento.save()

    res.status(200)
    res.json(documento)
}


export async function deleteUser(req, res){
    const {id} = req.params
    let documento = null;

    try {
        documento = await userModel.findOneAndDelete({
            "_id": id
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}