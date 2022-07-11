
const { transaction } = require('objection');

const Discussion = require('../models/discussion');

const postDiscussion = async (req, res) => {
  const knex = Discussion.knex();
  const trx = await transaction.start(knex);

 const io = require("../io").getIO();
   const result = await Discussion.query(trx)
    .insertAndFetch(req.body);


    io.sockets.emit("eventTrigger",result);

  await trx.commit();
    res.status(201);
    res.json(result);

  };

module.exports.createDiscussion = (req, res) => {
    postDiscussion(req, res).catch((error) => {
  });
};




