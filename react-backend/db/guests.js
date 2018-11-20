const knex = require('knex')
const config = require('../knexfile').development
const connection = knex(config)


function getGuests() {
    let db = connection
    return db('guests').select()
}

function addNewGuest(guest) {
    let db = connection
    console.log('db guest>>>', guest)
    return db('guests')
        .insert(guest)
        .then(result => db('guests').where({ id: result[0] }))
}

// function sumTotalGuest() {
//     let db = connection
//     return db('guests').sum('guestnum')
// }
module.exports = {
    getGuests,
    // sumTotalGuest,
    addNewGuest
}
