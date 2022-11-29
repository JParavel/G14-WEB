const users = []

//Recibe un objeto JSON.

export function createUser(req, res){

    // const nombre = userData.nombre
    // const apellido = userData.apellido
    // const email = userData.email
    const userData = req.body.userData;

    if (userData == null) {
        res.status(400).json("Es necesario atribuir userData")
        return;
    }

    const {nombre, apellido, email} = userData

    if(nombre == null){
        res.status(400).json("necesita un nombre")
        return;
    }

    if(apellido == null){
        res.status(400).json("necesita un apellido")
        return;
    }

    if(email == null){
        res.status(400).json("necesita un email")
        return;
    }

    const user = {
        nombre,
        apellido,
        email
    }

    users.push(user)

    res.status(200).json(user)
}

//READ
export function readUser(req, res){

    const nombre = req.params.nombre

    for (let index = 0; index < users.length; index++) {

        const user = users[index]

        console.log(user);

        if (nombre == user.nombre) {
            res.status(200).json(user)
            return;
        }
    }

    res.sendStatus(200)
}
