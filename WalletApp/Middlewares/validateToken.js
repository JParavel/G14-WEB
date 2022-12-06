import jwt from "jsonwebtoken"

const ACCESS_TOKEN = "b36d6185c3638eb5ea0b7ac017c36e3a4b5aef7eac566c491cad96b4cb3a25722ce4e1c09a338c23cadba5918e5eae629568dfe4a477c49008c1bc4d4c8ee0ce"

export default (req, res, next) => {
    const { token } = req.headers

    const nombre = jwt.verify(token, ACCESS_TOKEN)

    if (nombre == null) {
        res.sendStatus(401)
        return
    }

    req.nombre = nombre

    next()
}