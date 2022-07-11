
const { raw, transaction } = require('objection');
const GeonameTunisia = require('../models/geonameTunisia');
const Establishment = require('../models/establishment');


const result = async (req, res) => {
      const establishments = await Establishment.query()
      .select(
        'establishment.id',
        'establishment.name',
        'establishment.image',
        'establishment.longitude',
        'establishment.latitude',
        'establishment.description',
        raw(`
          array_agg(
          json_build_object(
            'id',product.id,
            'name', product.name,
            'price',product.price,
            'description',product.description
          )
        ) as product_list
       `),
      )
      .leftJoin('product', 'product.establishment_id', 'establishment.id')
      .skipUndefined()
      .where('city_id' ,req.query.city_id)
      .andWhere('establishment_id' ,req.query.establishment_id)
      .groupBy('establishment.id')
    res.status(200);
    res.json(establishments);

  };

module.exports.search = (req, res) => {
    result(req, res).catch((error) => {
  });
};
