
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('guests').del()
    .then(function () {
      // Inserts seed entries
      return knex('guests').insert([
        { id: 1, fullname: 'guest1', email: "guest1@gmail.com", attending: true, guestnum: 1 },
        { id: 2, fullname: 'guest2', email: "guest2@gmail.com", attending: true, guestnum: 2 },
        { id: 3, fullname: 'guest3', email: "guest3@gmail.com", attending: true, guestnum: 1 }
      ]);
    });
};
