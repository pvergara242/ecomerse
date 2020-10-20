import { Coupons } from "../models/index";
import { Model } from "sequelize";

const ctrl = {};

// crear cupon
ctrl.register = async (request, response) => {
  let {
    Code,
    Descripcion,
    active,
    value,
    multiple,
    start_date,
    end_date,
  } = request.body;
  const coupons = await coupons.create({
    Code,
    Descripcion,
    active,
    value,
    multiple,
    start_date,
    end_date,
    created_at: new Date(),
    updated_at: new Date(),
  });
  console.log(coupons);
  response.json({
    message: "Se ha agregado un coupons satisfactoriamente",
    Coupons,
  });
};

// ontener un cupon
ctrl.getCoupon = async (request, response) => {
  const CouponsId = request.params.CouponsId;
  const Coupons = await Coupons.findOne({
    where: {
      id: CouponsId,
    },
  });
  response.json(Coupons);
};

// obtener cupones
ctrl.listAll = async (request, response) => {
  const Coupons = await Coupons.findAll();
  response.json({ results: Coupons });
};

// modificar un cupon
ctrl.update = async (request, response) => {
  const Coupons = request.params.CouponsId;
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
    let CouponsId = await CouponsId.update(
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
          id: CouponsId,
        },
      }
    );
    CouponsId = CouponsId[1][0].dataValues;
    response.json(CouponsId);
  } catch (error) {
    response
      .status(400)
      .json({ message: "No se ha podido actualizar el cupon" });
  }
};

// eliminar un cupon
ctrl.delete = async (request, response) => {
  let CouponsId = request.params.CouponsId;
  try {
    let Coupons = await Coupons.findOne({
      where: {
        id: CouponsId,
      },
    });
    if (decoded.id !== Number(CouponsId) && Coupons) {
      await Coupons.update(
        {
          active: false,
        },
        {
          where: {
            id: CouponsId,
          },
        }
      );
      response.json({ message: "el cupon ha sido desactivado" });
    } else {
      response
        .status(400)
        .json({ message: "Hubo un error al tratar de desactivar el cupon" });
    }
  } catch (error) {
    response
      .status(400)
      .json({ message: "Hubo un error al tratar de desactivar el cupon" });
  }
};

export default ctrl;

