import { Products_categories } from "../models/index";
import { Model } from "sequelize";

const Products_categories = {};

// crear categoria del producto
Products_categories.register = async (request, response) => {
  let { category_id, product_id } = request.body;
  const Products_categories = await Products_categories.create({
    category_id,
    product_id,
    created_at: new Date(),
    updated_at: new Date(),
  });
  console.log(Products_categories);
  response.json({
    message: "Se ha agregado una categoria del producto satisfactoriamente",
    Products,
  });
};

// ontener un products_categories
Products_categories.getProducts_categories = async (request, response) => {
  const Products_categoriesId = request.params.Products_categoriesId;
  const Products_categories = await Products_categories.findOne({
    where: {
      id: Products_categoriesId,
    },
  });
  response.json(Products_categories);
};

// obtener Products_categories
Products_categories.listAll = async (request, response) => {
  const Products_categories = await Products_categories.findAll();
  response.json({ results: Products_categories });
};



// modificar un Products_categories
Products_categories.update= async(request, response) => {
    const Products_categories = request.params.Products_categoriesId;
    const {
            category_id,
            product_id,
    } = request.body;
    try {
        const Products_categoriesId = await Products_categoriesId.update({
            category_id,
            product_id,
            created_at: new Date(),
            updated_at: new Date(),
            updated_at: new Date()
        }, {
            returning: true,
            where: {
                id: Products_categoriesId
            }
        });
        const Products_categoriesId = Products_categoriesId[1][0].dataValues;
        response.json(Products_categories);
    } catch (error) {
        response
            .status(400)
            .json({message: "No se ha podido actualizar la categoria del producto"});
    }
}


  
// eliminar un Products_categories
Products_categories.delete = async(request, response) => {
    let Products_categoriesId = request.params.Products_categoriesId;
    try {
        let Products_categories = await Products_categories.findOne({
            where: {
                id: Products_categoriesId
            }
        });
        if (decoded.id !== Number(Products_categoriesId) && Products_categories) {
            await Products_categories.update({
                active: false
            }, {
                where: {
                    id: Products_categoriesId
                }
            });
            response.json({message: "la categoria del producto ha sido desactivado"});
        } else {
            response
                .status(400)
                .json({message: "Hubo un error al tratar de desactivar la categoria del producto"});
        }
    } catch (error) {
        response
            .status(400)
            .json({message: "Hubo un error al tratar de desactivar la categoria del producto"});
    }
}

  
  export default Products_categories;