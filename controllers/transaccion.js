import { transactions } from "../models/index";
import { Model } from "sequelize";

const ctrl = {};

// crear una transaccion 
ctrl.create = async (request, res) => {
  let {
    code,
    order_id,
    transdate,
    processor,
    processor_trans_id,
    amount,
    cc_num,
    cc_type,
    response
  } = request.body;
  const transactions = await transactions.create({
    code,
    order_id,
    transdate,
    processor,
    processor_trans_id,
    amount,
    cc_num,
    cc_type,
    response,
    created_at: new Date(),
    updated_at: new Date(),
  });
  console.log(transactions);
  res.json({
    message: "Se ha agregado un producto satisfactoriamente",
    transactions,
  });
};

// ontener un productov por id 
ctrl.getTransaccion = async (request, response) => {
  const transactions= request.params.transactionsId;
  const transactionsId = await transactions.findOne({
    where: {
      id: transactionsId,
    },
  });
  response.json(transactions);
};

// leer cupones listando todos 
ctrl.listAll = async (request, response) => {
  const transactions = await transactions.findAll();
  response.json({ results: transactions });
};

// modificar un cupon
ctrl.update = async (request, res) => {
  const transactions = request.params.transactionsId;
  const {
    code,
    order_id,
    transdate,
    processor,
    processor_trans_id,
    amount,
    cc_num,
    cc_type,
    response,
  } = request.body;
  try {
    const transactionsId = await transactionsId.update(
      {
        code,
        order_id,
        transdate,
        processor,
        processor_trans_id,
        amount,
        cc_num,
        cc_type,
        response,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        returning: true,
        where: {
          id: transactionsId,
        },
      }
    );
    transactionsId = transactionsId[1][0].dataValues;
    res.json(transactionsId);
  } catch (error) {
    res
      .status(400)
      .json({ message: "No se ha podido actualizar el producto" });
  }
};

// eliminar un cupon
ctrl.delete = async (request, res) => {
  let transactionsId = request.params.transactionsId;
  try {
    let transactions = await transactions.findOne({
      where: {
        id: transactionsId,
      },
    });
    if (decoded.id !== Number(transactionsId) && transactions) {
      await transactions.update(
        {
          active: false,
        },
        {
          where: {
            id:transactionsId,
          },
        }
      );
      res.json({ message: "el producto ha sido desactivado" });
    } else {
      res
        .status(400)
        .json({ message: "Hubo un error al tratar de desactivar el producto" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Hubo un error al tratar de desactivar el producto" });
  }
};

export default ctrl;

