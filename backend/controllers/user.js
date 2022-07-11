
const { raw, transaction } = require('objection');
const User = require('../models/user');
const Provider = require('../models/porvider');
const Administrator = require('../models/administrator');


const postUser = async (req, res) => {

  const knex = User.knex();
  const trx = await transaction.start(knex);
  let users = await User.query(trx)
  .select()
  .where('email' ,req.body.email)
  if(!users.length)
  {
     users = await User.query(trx)
    .insertAndFetch(req.body);
  }
  await trx.commit();
    res.status(201);
    res.json(users);


  };

module.exports.createUser = (req, res) => {
  postUser(req, res).catch((error) => {
  });
};

const loginUser = async (req, res) => {
  let user = { type : "user"};
  user = await User.query()
  .select()
  .where('email' ,req.body.email)
  .andWhere('password' ,req.body.password)
if(!user.id)
{
  user = await Provider.query()
  .select()
  .where('email' ,req.body.email)
  .andWhere('password' ,req.body.password)

  user.type="provider";
}

if(!user.id)
{
  user = await Administrator.query()
  .select()
  .where('email' ,req.body.email)
  .andWhere('password' ,req.body.password)

  user.type="admin";
}

  res.status(201);
  res.json(Object.assign({}, user));

};

module.exports.loginUsers = (req, res) => {
  loginUser(req, res).catch((error) => {
});
};