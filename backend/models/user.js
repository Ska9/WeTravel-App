const { Model } = require('objection');


class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'user';
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
        firstname: { type: 'string', minLength: 1, maxLength: 255 },
        lastname: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        tax_registration_number: { type: 'string', minLength: 1, maxLength: 255 },
        phone: { type: 'string', minLength: 1, maxLength: 255 },
        postal_code: { type: 'string', minLength: 1, maxLength: 255 },
        activity_sector: { type: 'string', minLength: 1, maxLength: 255 },
        rate: { type: 'string', minLength: 1, maxLength: 255 },
        foundation_year: { type: 'string', minLength: 1, maxLength: 255 },
      }
    };
  }

  // This object defines the relations to other models.
 
}
module.exports = User;