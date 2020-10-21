const sequelize = require("sequelize");
const Op = sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const enviarCorreo = require("../middlewares/nodemailer");
const { Users } = require("../models");
const roles = require("../utils/roles");

const login = async (request, response) => {
  let { email, password } = request.body;
  let user = await Users.findOne({
    include: [{
      model: roles,
      as:'roles'
    }],
    where: {
      email: email,
    },
  });
  //Comprobar que el usuario exista
  if (user) {
    //Comparar las contraseñas
    bcrypt.compare(password, user.password, function (err, res) {
      if (err || res === false) {
        response
          .status(401)
          .json({ message: "Las crendenciales son incorrectas" });
      } else {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            roles: user.roles
          },
          process.env.JWT_SECRET,
          { expiresIn: "1hr" }
        );
        response
          .cookie("access_token", token, {
            expires: new Date(Date.now() + 1 * 3600000),
          })
          .json({ message: "Has iniciado sesión correctamente" });
      }
    });
  } else {
    // Cuando no exista el correo enviado a través de la petición en nuestra base de
    // datos
    response.status(401).json({ message: "Las crendenciales son incorrectas" });
  }
};

const updatePassword = async (req, res) => {
  const { id, token, password } = req.body;
  const user = await Users.findOne({
    where: {
      [Op.and]: [
        {
          id: id,
        },
        {
          token: token,
        },
      ],
    },
  });
  if (user) {
    const passwordEncrypted = bcrypt.hashSync(password, 10);
    try {
      const updatedUser = await Users.update(
        {
          password: passwordEncrypted,
          token: generateToken(8),
          updated_at: new Date(),
        },
        {
          returning: true,
          where: {
            id: id,
          },
        }
      );
      res.json({ message: "Se ha actualizado la contraseña" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "No se ha podido restablecer la contraseña" });
    }
  } else {
    res
      .status(400)
      .json({ message: "No se ha podido restablecer la contraseña" });
  }
};

const logout = (req, res) => {
  res
    .clearCookie("access_token", { path: "/" })
    .json({ message: "Cerrando sesión..." });
};

const resetPassword = async (req, res) => {
  //Obtengo el email a través de la petición
  let email = req.body.email;
  try {
    //Obtengo el registro del usuario
    const users = await Users.findOne({
      where: {
        email: email,
      },
    });
    //Envio el correo al usuario
    await enviarCorreo(email, users.id, users.token);
    res.json({ message: "El correo ha sido enviado satisfactoriamente" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "El correo no ha podido enviarse", error: error });
  }
};

const generateToken = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = {
  login,
  updatePassword,
  logout,
  resetPassword,
};
