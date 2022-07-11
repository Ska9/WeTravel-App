
const { transaction } = require('objection');
const Establishment = require('../models/establishment');

const postEstablishment = async (req, res) => {
  const knex = Establishment.knex();
  const trx = await transaction.start(knex);

console.log('::::::::::', req.body)
   const result = await Establishment.query(trx)
    .insertAndFetch(req.body);

  await trx.commit();
    res.status(201);
    res.json(result);

  };

module.exports.createEstablishment = (req, res) => {
    postEstablishment(req, res).catch((error) => {
  });
};



const getEstablishment = async (req, res) => {
  const knex = Establishment.knex();
  const trx = await transaction.start(knex);


   const result = await Establishment.query(trx)
    .select()
    .where('provider_id' ,req.query.provider_id)

  await trx.commit();
    res.status(200);
    res.json(result);

  };

module.exports.fetchEstablishment = (req, res) => {
  getEstablishment(req, res).catch((error) => {
});
};




