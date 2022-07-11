
const { transaction } = require('objection');
const Annonce = require('../models/annonce');

const postAnnonce = async (req, res) => {
  const io = require("../io").getIO();
  const knex = Annonce.knex();
  const trx = await transaction.start(knex);

   const result = await Annonce.query(trx)
    .insertAndFetch(req.body);

  await trx.commit();

  io.sockets.emit("public",result);
    res.status(201);
    res.json(result);

  };

module.exports.createAnnonce = (req, res) => {
    postAnnonce(req, res).catch((error) => {
  });
};



const getAnnonce = async (req, res) => {
  const knex = Annonce.knex();
  const trx = await transaction.start(knex);


   const result = await Annonce.query(trx)
    .select('annonce.*', 'establishment.name as establishment_name', 'product.name as product_name', 'product.price as old_price')
    .skipUndefined()
    .innerJoin('product', 'product.id' , 'product_id')
    .innerJoin('establishment', 'establishment.id' , 'establishment_id')
    .where('provider_id' ,req.query.provider_id)

  await trx.commit();
    res.status(200);
    res.json(result);

  };

module.exports.fetchAnnonce = (req, res) => {
  getAnnonce(req, res).catch((error) => {
});
};




