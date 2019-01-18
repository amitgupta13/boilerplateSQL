const winston = require('winston');
const db = require('../startup/db');

module.exports = function(){
    db.conDb().then(conn => {
        winston.info(`Connected to DB`);
    })
    .catch(err=>{
        console.log('Error connecting to DB',err);
    })
}