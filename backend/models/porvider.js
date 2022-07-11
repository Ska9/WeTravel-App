const { Model } = require('objection');


class Provider extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'provider';
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
        is_provider : { type: ['boolean', 'null'] },
        is_confirmed : { type: ['boolean', 'null'] },
        firstname: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        lastname: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        email: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        password: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        tax_registration_number: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        phone: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        postal_code: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        activity_sector: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        rate: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        foundation_year: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
      }
    };
  }

  // This object defines the relations to other models.
 
}
module.exports = Provider;