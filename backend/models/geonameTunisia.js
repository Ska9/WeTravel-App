const { Model } = require('objection');

class GeonameTunisia extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'geoname_tunisia';
  }
}

module.exports = GeonameTunisia;