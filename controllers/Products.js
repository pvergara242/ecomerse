import { Products } from "../models/index";
import { Model } from "sequelize";

const ctrl = {};

// crear producto
ctrl.create = async (request, response) => {
  let {
    Sku,
    name,
    description,
    product_status_id,
    regular_price,
    quantity,
    texable,
  } = request.body;
  const Products = await Products.create({
    Sku,
    name,
    description,
    product_status_id,
    regular_price,
    discount_price,
    quantity,
    texable,
    created_at: new Date(),
    updated_at: new Date(),
  });
  console.log(Products);
  response.json({
    message: "Se ha agregado un producto satisfactoriamente",
    Products,
  });
};

// ontener un productov por id 
ctrl.getProducts = async (request, response) => {
  const ProductsId = request.params.ProductsId;
  const Products = await Products.findOne({
    where: {
      id: ProductsId,
    },
  });
  response.json(Products);
};

// leer cupones listando todos 
ctrl.listAll = async (request, response) => {
  const Products = await Products.findAll();
  response.json({ results: Products });
};

// modificar un cupon
ctrl.update = async (request, response) => {
  const Products = request.params.ProductsId;
  const {
    Sku,
    name,
    description,
    product_status_id,
    regular_price,
    discount_price,
    quantity,
    texable,
  } = request.body;
  try {
    const ProductsId = await ProductsId.update(
      {
        Sku,
        name,
        description,
        product_status_id,
        regular_price,
        discount_price,
        quantity,
        texable,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        returning: true,
        where: {
          id: ProductsId,
        },
      }
    );
    ProductsId = ProductsId[1][0].dataValues;
    response.json(ProductsId);
  } catch (error) {
    response
      .status(400)
      .json({ message: "No se ha podido actualizar el producto" });
  }
};

// eliminar un cupon
ctrl.delete = async (request, response) => {
  let ProductsId = request.params.ProductsId;
  try {
    let Products = await Products.findOne({
      where: {
        id: ProductsId,
      },
    });
    if (decoded.id !== Number(ProductsId) && Products) {
      await Products.update(
        {
          active: false,
        },
        {
          where: {
            id: ProductsId,
          },
        }
      );
      response.json({ message: "el producto ha sido desactivado" });
    } else {
      response
        .status(400)
        .json({ message: "Hubo un error al tratar de desactivar el producto" });
    }
  } catch (error) {
    response
      .status(400)
      .json({ message: "Hubo un error al tratar de desactivar el producto" });
  }
};

export default ctrl;

