const { Model } = require('objection');


class Annonce extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'annonce';
  }

  // Optional JSON schema. This is not the database schema!
  // No tables or columns are generated based on this. This is only
  // used for input validation. Whenever a model instance is created
  // either explicitly or implicitly it is checked against this schema.
  // See http://json-schema.org/ for more info.
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        name: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        image: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        description: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        discount_rate: { type: ['number', 'null'] },
        product_id: { type: ['integer', 'null'] },
      }
    };
  }

  // This object defines the relations to other models.
 
}
module.exports = Annonce;