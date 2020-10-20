const {Categories} = require('../models');

const create = async(req, res) => {
   let {name, parent_id} = req.body;
   res.json({message: 'Se Ha creado la categoría satisfactoriamente'});
   try {
      const category = await Categories.create({name, parent_id});
   } catch (error) {
      res.json({message: 'Hubo un error al crear la Categoría'});
   }
}

module.exports