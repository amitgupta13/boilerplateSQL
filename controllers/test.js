const config = require('config');
const {Pool, Client} = require('pg');

const pool = new Pool(config.get('db'));

async function postTest(req, res){
    const test = await pool.query('insert into card (card) values ($1) returning *',[req.body.card]);
    res.status(200).json({
        card:test.rows[0]
    })

}

async function deleteTest(req, res){
    const test = await pool.query('delete from card where id = $1 returning *',[req.body.id]);
    res.status(200).json({
        card:test.rows[0]
    })

}

async function getTest(req, res){
    const test = await pool.query('select * from card');
    console.log(test.rows);
    res.status(200).json({
        card:test.rows
    })
}

module.exports = {
    postTest,
    getTest,
    deleteTest
}