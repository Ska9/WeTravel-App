
const GeonameTunisia = require('../models/geonameTunisia');
const Establishment = require('../models/establishment');


const cities = async (req, res) => {
    const cities = await GeonameTunisia.query()
      .select(
        'geoname_tunisia.*'
      )
      .innerJoin('establishment', 'establishment.city_id', 'geoname_tunisia.id')
      ;
      const establishments = await Establishment.query()
      .select(
        '*'
      );
    res.status(200);
    res.json([...cities.map(el => Object.assign({type : "city"}, el)), ...establishments.map(el => Object.assign({type : "establishment"}, el))]);

  };

module.exports.suggestionsRead = (req, res) => {
 cities(req, res).catch((error) => {
  });
};
