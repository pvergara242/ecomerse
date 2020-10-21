import { order_products } from "../models/index";
import { Model } from "sequelize";

const ctrl = {};

// crear un order_products
ctrl.register = async (request, response) => {
  let {
    order_id,
    sku,
    name,
    description,
    price,
    quantity,
    subtotal,
  } = request.body;
  const order_products = await order_products.create({
    order_id,
    sku,
    name,
    description,
    price,
    quantity,
    subtotal,
    created_at: new Date(),
    updated_at: new Date(),
  });
  console.log(order_products);
  response.json({
    message: "Se ha agregado una orden del producto satisfactoriamente",
    Coupons,
  });
};

// ontener un cupon
ctrl.getorder_products = async (request, response) => {
  const order_productsId = request.params.order_productsId;
  const order_products = await order_products.findOne({
    where: {
      id: order_productsId,
    },
  });
  response.json(order_products);
};

// obtener cupones
ctrl.listAll = async (request, response) => {
  const order_products = await order_products.findAll();
  response.json({ results: order_products });
};

// modificar un cupon
ctrl.update = async (request, response) => {
  const order_products = request.params.order_productsId;
  const {
    order_id,
    sku,
    name,
    description,
    price,
    quantity,
    subtotal,
  } = request.body;
  try {
    let order_productsId = await order_productsId.update(
      {
        order_id,
        sku,
        name,
        description,
        price,
        quantity,
        subtotal,
        created_at: new Date(),
        updated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        returning: true,
        where: {
          id: order_productsId,
        },
      }
    );
    order_productsId = order_productsId[1][0].dataValues;
    response.json(order_productsId);
  } catch (error) {
    response
      .status(400)
      .json({ message: "No se ha podido actualizar la oden del producto" });
  }
};

// eliminar un cupon
ctrl.delete = async (request, response) => {
  let order_productsId = request.params.order_productsId;
  try {
    let order_products = await order_products.findOne({
      where: {
        id: order_productsId,
      },
    });
    if (decoded.id !== Number(order_productsId) && order_products) {
      await order_products.update(
        {
          active: false,
        },
        {
          where: {
            id: order_productsId,
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

