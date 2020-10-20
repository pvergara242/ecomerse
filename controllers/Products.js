import { Products } from "../models/index";
import { Model } from "sequelize";

const Products = {};

// crear producto
Products.create = async (request, response) => {
  let { Sku, name, description, product_status_id, regular_price, quantity,texable } = request.body;
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

// ontener un producto
Products.getProducts = async (request, response) => {
  const ProductsId = request.params.ProductsId;
  const Products = await Products.findOne({
    where: {
      id: ProductsId,
    },
  });
  response.json(Products);
};

// leer cupones
Products.listAll = async (request, response) => {
  const Products = await Products.findAll();
  response.json({ results: Products });
};



// modificar un cupon
Products.update= async(request, response) => {
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
        const ProductsId = await ProductsId.update({
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
            updated_at: new Date()
        }, {
            returning: true,
            where: {
                id: ProductsId
            }
        });
        const ProductsId = ProductsId[1][0].dataValues;
        response.json(Products);
    } catch (error) {
        response
            .status(400)
            .json({message: "No se ha podido actualizar el producto"});
    }
}


  
// eliminar un cupon
Products.delete = async(request, response) => {
    let ProductsId = request.params.ProductsId;
    try {
        let Products = await Products.findOne({
            where: {
                id: ProductsId
            }
        });
        if (decoded.id !== Number(ProductsId) && Products) {
            await Products.update({
                active: false
            }, {
                where: {
                    id: ProductsId
                }
            });
            response.json({message: "el producto ha sido desactivado"});
        } else {
            response
                .status(400)
                .json({message: "Hubo un error al tratar de desactivar el producto"});
        }
    } catch (error) {
        response
            .status(400)
            .json({message: "Hubo un error al tratar de desactivar el producto"});
    }
}

  
  export default Products;