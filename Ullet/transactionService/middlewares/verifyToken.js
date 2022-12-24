import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.API_URL;

export async function verifyToken(req, res, next) {
  console.log(API_URL);
  try {
    //Obtenemos el token del encabezado
    const { token } = req.headers;

    //Consultamos al backend por el usuario correspondiente a este token
    const res = await fetch(API_URL + "/api/verify", {
      headers: {
        token: token,
      },
    });

    //Segun la respuesta decidimos si continuamos o mandamos un mensaje de error
    const document = await res.json();
    if (res.ok) {
      req.user = document.user;
      next();
    } else {
      console.log(document.error);
      res.status(401).json(document);
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
