import jwt from 'jsonwebtoken';

const validateToken = (request, response, next) => {
  //Middleware para validar el token del usuario
  // token = request.headers
  if (request.headers.authorization) {
    const authorization = request.headers.authorization.split(" ");
    const token = authorization[1];

    try {
      request["token"] = token;
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
        next();
      }
    } catch (err) {
      console.log(err);
      response.status(401).json({ message: "El token es invalido" });
    }
  } else {
    response.status(401).json({ message: "El token no ha sido proporcionado" });
  }
};

export default  validateToken
// module.exports = validateToken;
