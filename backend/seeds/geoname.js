exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('geoname_tunisia').del()
    .then(function () {
      // Inserts seed entries
      return knex('geoname_tunisia').insert([
        {
          id: 1,
          name: 'Sousse',
          longitude:10.640525,
          latitude: 35.828829,
        },
        {
          id: 2,
          name: 'Mahdia',
          longitude: 10.9622433,
          latitude: 35.4877892,
        },
        {
          id: 3,
          name: 'Monastir',
          longitude:0.3266247,
          latitude:44.7729963,
        },
        {
        id: 4,
        name: 'Sfax',
        longitude:10.3358789,
        latitude:34.7231273,
      },
      {
        id: 5,
        name: 'Tunis',
        longitude:9.400138,
        latitude:33.8439408,
      },
      {
        id: 6,
        name: 'Kairouan',
        longitude:10.10062,
        latitude:35.6710101,
      },
      {
        id: 7,
        name: 'Tunis',
        longitude:9.793063,
        latitude:33.7765032,
      },
      {
        id: 8,
        name: 'Hammamat',
        longitude:10.618929,
        latitude:36.398068,
      },
      {
        id: 9,
        name: 'Bizerte',
        longitude:9.8708565,
        latitude:37.2720905,
      },
      {
        id: 10,
        name: 'Gafsa',
        longitude:8.7907988,
        latitude:34.43367,
      },
      {
        id: 11,
        name: 'Nabeul',
        longitude:10.6707197,
        latitude:36.4823676,
      },
      {
        id: 12,
        name: 'Ariana',
        longitude:10.1219855,
        latitude:36.9685735,
      },
      {
        id: 13,
        name: 'Béja',
        longitude:8.7907988,
        latitude:34.43367,
      },
      {
        id: 14,
        name: 'Tataouine',
        longitude:9.7702197,
        latitude:31.7317009,
      },
      {
        id: 15,
        name: 'Le Kef',
        longitude:8.6082924,
        latitude:36.15364,
      },
      {
        id: 16,
        name: 'Tabarka',
        longitude:8.7573829,
        latitude:36.9545614,
      },
      {
        id: 17,
        name: 'Sidi Bouzid',
        longitude:9.5263598,
        latitude:34.881181,
      },
      {
        id: 18,
        name: 'Tozeur',
        longitude:8.1118241,
        latitude:33.913485,
      },
      {
        id: 19,
        name: 'Kasserine',
        longitude:8.8575513,
        latitude:35.209379,
      },
      {
        id: 20,
        name: 'Zarzis',
        longitude:10.9343099,
        latitude:33.4662476,
      },
      {
        id: 21,
        name: 'Zaghouan',
        longitude:10.2019798,
        latitude:36.4117196,
      },
      {
        id: 22,
        name: 'Siliana',
        longitude:9.3577129,
        latitude:35.97153237,
      },
      {
        id: 23,
        name: 'Médenine',
        longitude:11.2870254,
        latitude:32.9819987,
      },
      {
        id: 24,
        name: 'Jendouba',
        longitude:8.752647,
        latitude:36.6779725,
      },
     

      ]);
    });
};
