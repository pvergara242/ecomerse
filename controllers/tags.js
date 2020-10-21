import { tags } from "../models/index";
import { Model } from "sequelize";

const ctrl = {};

// crear un order_products
ctrl.register = async (request, response) => {
  let {
    name,
  } = request.body;
  const tags = await tags.create({
    name,
    created_at: new Date(),
    updated_at: new Date(),
  });
  console.log(tags);
  response.json({
    message: "Se ha agregado una orden del producto satisfactoriamente",
    tags,
  });
};

// ontener un cupon
ctrl.getTags = async (request, response) => {
  const tagsId = request.params.tagsId;
  const tags = await tags.findOne({
    where: {
      id: tagsId,
    },
  });
  response.json(tags);
};

// obtener cupones
ctrl.listAll = async (request, response) => {
  const tags = await tags.findAll();
  response.json({ results: tags });
};

// modificar un cupon
ctrl.update = async (request, response) => {
  const tags = request.params.tagsId;
  const {
    name
  } = request.body;
  try {
    let tagsId = await tagsId.update(
      {
        name,
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        returning: true,
        where: {
          id: tagsId,
        },
      }
    );
    tagsId = tagsId[1][0].dataValues;
    response.json(tagsId);
  } catch (error) {
    response
      .status(400)
      .json({ message: "No se ha podido actualizar la oden del producto" });
  }
};

// eliminar un cupon
ctrl.delete = async (request, response) => {
  let tagsId = request.params.tagsId;
  try {
    let tags = await tags.findOne({
      where: {
        id: tagsId,
      },
    });
    if (decoded.id !== Number(tagsId) && tags) {
      await tags.update(
        {
          active: false,
        },
        {
          where: {
            id: tagsId,
          },
        }
      );
      response.json({ message: "la orden del producto ha sido desactivado" });
    } else {
      response
        .status(400)
        .json({ message: "Hubo un error al tratar de desactivar una orden del producto" });
    }
  } catch (error) {
    response
      .status(400)
      .json({ message: "Hubo un error al tratar de desactivar una orden del producto" });
  }
};

export default ctrl;

