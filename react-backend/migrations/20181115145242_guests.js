
exports.up = function (knex, Promise) {
    return knex.schema.createTable('guests', table => {
        table.increments('id').primary()
        table.string('fullname')
        table.string('email')
        table.boolean('attending')
        table.integer('guestnum')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('guests')
};
