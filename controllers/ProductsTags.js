import { ProductsTags } from "../models/index";
import { Model } from "sequelize";

const ctrl = {};

// crear un order_products
ctrl.register = async (request, response) => {
  let {
    product_id,
    tag_id,
  } = request.body;
  const ProductsTags = await ProductsTags.create({
    product_id,
    tag_id,
    created_at: new Date(),
    updated_at: new Date(),
  });
  console.log(ProductsTags);
  response.json({
    message: "Se ha agregado una orden del producto satisfactoriamente",
    ProductsTags,
  });
};

// ontener un cupon
ctrl.getProductsTags = async (request, response) => {
  const ProductsTagsId = request.params.ProductsTagsId;
  const ProductsTags = await ProductsTags.findOne({
    where: {
      id: ProductsTagsId,
    },
  });
  response.json(ProductsTags);
};

// obtener cupones
ctrl.listAll = async (request, response) => {
  const ProductsTags = await ProductsTags.findAll();
  response.json({ results: ProductsTags });
};

// modificar un cupon
ctrl.update = async (request, response) => {
  const ProductsTags = request.params.ProductsTagsId;
  const {
        product_id,
        tag_id,
  } = request.body;
  try {
    let ProductsTagsId = await ProductsTagsId.update(
      {
        product_id,
         tag_id,
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        returning: true,
        where: {
          id: ProductsTagsId,
        },
      }
    );
    ProductsTagsId = ProductsTagsId[1][0].dataValues;
    response.json(ProductsTagsId);
  } catch (error) {
    response
      .status(400)
      .json({ message: "No se ha podido actualizar la oden del producto" });
  }
};

// eliminar un cupon
ctrl.delete = async (request, response) => {
  let ProductsTagsId = request.params.ProductsTagsId;
  try {
    let ProductsTags = await ProductsTags.findOne({
      where: {
        id: ProductsTagsId,
      },
    });
    if (decoded.id !== Number(ProductsTagsId) && ProductsTags) {
      await ProductsTags.update(
        {
          active: false,
        },
        {
          where: {
            id: ProductsTagsId,
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

