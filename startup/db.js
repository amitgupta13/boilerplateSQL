const pgp = require('pg-promise');
const config = require('config');

let db;

function conDb(){
    const options = config.get('db');
    db = pgp()(options);
    return db.connect();
}

function getDb(){
    return db;
}

module.exports = {
    conDb,
    getDb
}