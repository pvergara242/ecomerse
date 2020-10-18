import { coupons } from "../models/index";
import { Model } from "sequelize";

const coupons = {};

coupons.register = async (request, response) => {
  // let secret = process.env.JWT_SECRET || "orlando"
  // console.log(secret)
  let { Code, Descripcion, active, value, multiple, start_date,end_date, } = request.body;
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
  console.log(user);
  response.json({
    message: "Se ha agregado un coupons satisfactoriamente",
    user,
  });
};

coupons.update = (request, response) => {
    console.log(request);
    response.json({
      data: {},
      message: "el cupon ha sido modificado existosamente",
    });
  };