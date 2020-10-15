const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Users } = require("../models/index.js");
const { Model } = require("sequelize");
const enviarCorreo = require("../middlewares/nodemailer");

const ctrl = {};

ctrl.register = async (request, response) => {
  // let secret = process.env.JWT_SECRET || "orlando"
  // console.log(secret)
  let { first_name, last_name, email, active, token, password } = request.body;
  const passwordEncrypted = bcrypt.hashSync(password, 10);
  const user = await Users.create({
    first_name,
    last_name,
    email,
    active,
    token,
    password: passwordEncrypted,
    created_at: new Date(),
    updated_at: new Date(),
  });
  console.log(user);
  response.json({
    message: "Se ha agregado el usuario satisfactoriamente",
    user,
  });
};
// Login user
ctrl.login = async (request, response) => {
  const { email, password } = request.body;
  let secret = process.env.JWT_SECRET || "orlando";
  let user = await Users.findOne({ where: { email: email } });
  if (user) {
    bcrypt.compare(password, user.password, function (err, res) {
      if (err || res === false) {
        response
          .status(401)
          .json({ message: "las credenciales son incorrectas" });
      } else {
        const token = jwt.sign(
          { id: user.id, email: user.email, password: user.password },
          secret,
          { expiresIn: "1h" }
        );
        response.cookie("access_token", "Bearer " + token, {
          expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
        });
        response.json({
          message: "has iniciado sesion correctamente",
          token: token,
        });
      }
    });
  } else {
    response.status(401).json({
      message: "no existe el usuario con el mismo correo ingresado",
    });
  }
};
// update user
ctrl.update = (request, response) => {
  console.log(request);
  res.json({
    data: {},
    message: "this si the update user controller",
  });
};

// send email
ctrl.reset = async (request, response) => {
  // console.log(req.body);
  try {
    const { email } = req.body;
    let user = await Users.findOne({ where: { email: email } });
    if (user) {
      console.log(request);
    } else {
      console.log("No se han encontrado nada");
    }
    const emailMaster = process.env.GOOGLE_ACCOUNT || "pvergara242@gmail.com";
    const objeto = {
      from: emailMaster,
      to: email,
      subject: "Restaurar contraseña",
      text: `Su correo es:${email}`,
    };
    enviarCorreo(objeto);
    res.json({
      data: user.email,
      message: "el correo se ha enviado satisfactoriamente",
    });
  } catch (error) {
    console.log(error);
  }
};
// update password
ctrl.update = (request, response) => {
  console.log(request);
  res.json({
    data: {},
    message: "something goes wrong on update pasword",
  });
};

// logout
ctrl.logout = (request, response) => {
  res.json({
    data: { request },
    message: "you have logout the session",
  });
};

// reset pasword
ctrl.reset = (request, response) => {
  console.log(request);
  res.json({
    data: {},
    message: "something goes wrong in password",
  });
};

// delete
ctrl.deleteUser = async (request, response) => {
  let decoded = jwt.verify(request.token, process.env.JWT_SECRET);
  try {
    let user = await Users.findOne({
      where: {
        id: userId,
      },
    });
    if (decoded.id !== Number(userId) && user) {
      await Users.update(
        { active: false },
        {
          where: {
            id: userId,
          },
        }
      );
      response.json({ message: "La cuenta ha sido desactivada" });
    } else {
      response
        .status(400)
        .json({ message: "Hubo un error al tratar de desactivar la cuenta" });
    }
  } catch (error) {
    response
      .status(400)
      .json({ message: "Hubo un error al tratar de desactivar la cuenta" });
  }
};

// list all ussers

ctrl.listAll = async (request, response) => {
  const users = await Users.findAll();
  response.json({ results: users });
};

// get one user
ctrl.getUser = async (request, response) => {
  const userId = request.params.id;
  const users = await Users.findOne({
    where: {
      id: userId,
    },
  });
  response.json(users);
};

//  Edit  User
ctrl.edit = async (request, response) => {
  let userId = request.params.id;
  let { first_name, last_name, email, active, token, password } = request.body;
  try {
    const users = await Users.update(
      {
        first_name,
        last_name,
        email,
        active,
        token,
        password,
        updated_at: new Date(),
      },
      {
        returning: true,
        where: {
          id: userId,
        },
      }
    );
    const user = users[1][0].dataValues;
    response.json(user);
  } catch (error) {
    response
      .status(400)
      .json({ message: "No se ha podido actualizar el registro" });
  }
};

module.exports = ctrl;
