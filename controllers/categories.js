import { Categories } from "../models/index";
import { Model } from "sequelize";

const ctrl = {};

// crear una categoria
ctrl.register = async (request, response) => {
  let {name,parent_id  } = request.body;
  const Categories = await Categories.create({
    name,
    parent_id,
    created_at: new Date(),
    updated_at: new Date(),
  });
  console.log(Categories);
  response.json({
    message: "Se ha agregado una categoria satisfactoriamente",
    Categories,
  });
};

// ontener varias categorias
ctrl.getCategories = async (request, response) => {
  const CategoriesId = request.params.CategoriesId;
  const Categories = await Categories.findOne({
    where: {
      id: CategoriesId,
    },
  });
  response.json(Categories);
};

// obtener categorias
ctrl.listAll = async (request, response) => {
  const Categories = await Categories.findAll();
  response.json({ results: Categories });
};

// modificar una categoria
ctrl.update= async(request, response) => {
  const Categories = request.params.CategoriesId;
  const {
    name,
    parent_id
  } = request.body;
  try {
      const CategoriesId = await CategoriesId.update({
            name,
            parent_id,
            created_at: new Date(),
            updated_at: new Date(),
            updated_at: new Date()
      }, {
          returning: true,
          where: {
              id:CategoriesId
          }
      });
    CategoriesId = CategoriesId[1][0].dataValues;
      response.json(CategoriesId);
  } catch (error) {
      response
          .status(400)
          .json({message: "No se ha podido actualizar la categoria"});
  }
}

// eliminar una categoria 
ctrl.delete = async(request, response) => {
  let CategoriesId = request.params.CategoriesId;
  try {
      let Categories = await Categories.findOne({
          where: {
              id: CategoriesId
          }
      });
      if (decoded.id !== Number(CategoriesId) && Categories) {
          await Categories.update({
              active: false
          }, {
              where: {
                  id:CategoriesId
              }
          });
          response.json({message: "la categoria ha sido desactivado"});
      } else {
          response
              .status(400)
              .json({message: "Hubo un error al tratar de desactivar la categoria"});
      }
  } catch (error) {
      response
          .status(400)
          .json({message: "Hubo un error al tratar de desactivar la categoria"});
  }
}

  export default ctrl;
