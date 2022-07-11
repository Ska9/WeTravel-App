
const { transaction } = require('objection');
const Product = require('../models/service');

const postProduct = async (req, res) => {
  const knex = Product.knex();
  const trx = await transaction.start(knex);

console.log('::::::::::', req.body)
   const result = await Product.query(trx)
    .insertAndFetch(req.body);

  await trx.commit();
    res.status(201);
    res.json(result);

  };

module.exports.createProduct = (req, res) => {
    postProduct(req, res).catch((error) => {
  });
};



const getProduct = async (req, res) => {
  const knex = Product.knex();
  const trx = await transaction.start(knex);


   const result = await Product.query(trx)
    .select('product.*', 'establishment.name as establishment_name')
    .innerJoin('establishment', 'establishment.id' , 'establishment_id')
    .where('provider_id' ,req.query.provider_id)

  await trx.commit();
    res.status(200);
    res.json(result);

  };

module.exports.fetchProduct = (req, res) => {
  getProduct(req, res).catch((error) => {
});
};




