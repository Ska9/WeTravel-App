
const { transaction } = require('objection');
const Provider = require('../models/porvider');

const postProvider = async (req, res) => {
  const knex = Provider.knex();
  const trx = await transaction.start(knex);
  let users = await Provider.query(trx)
  .select()
  .where('email' ,req.body.email)
  console.log(':::::::::', users)
  if(!users.length)
  {
     users = await Provider.query(trx)
    .insertAndFetch(req.body);
  }
  
  await trx.commit();
    res.status(201);
    res.json(users);

  };

module.exports.createProvider = (req, res) => {
    postProvider(req, res).catch((error) => {
  });
};


const updateProvider = async (req, res) => {
  const data =  Object.assign({}, req.body);
  delete data.id ;
  const users = await Provider.query().updateAndFetchById(req.body.id, data);

    res.status(201);
    res.json(users);

  };



module.exports.updateProvider = (req, res) => {
  updateProvider(req, res).catch((error) => {
});
};

