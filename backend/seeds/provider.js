exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('provider').del()
      .then(function () {
        // Inserts seed entries
        return knex('provider').insert([
          {
            id: 1,
            firstname: 'admin',
            lastname:'admin',
            email: 'admin',
            is_admin:true,
            is_provider:true,
            is_confirmed:true,
          }, 
        ]);
      });
  };
  