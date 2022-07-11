const { Model } = require('objection');


class Discussion extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'discussion';
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
        message: { type: ['string', 'null'], minLength: 1 },
        provider_id: { type: ['integer', 'null'] },
      }
    };
  }

  // This object defines the relations to other models.
 
}
module.exports = Discussion;