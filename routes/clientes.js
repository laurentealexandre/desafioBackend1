const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', function(req, res, next) {
    mysql.createConnection({
        host: 'localhost',
        user: 'desafio',
        password: '123Mudar*',
        database: 'desafiobd',
        port: 3306,
    }).then((connection) => {
        connection.query('SELECT * FROM clientes')
            .then((result) => {
                res.send(result[0]);
            })
            .catch((err) => {
                console.error('Error executing query:', err);
                res.status(500).send('Internal Server Error');
            });
    }).catch((err) => {
        console.error('Error connecting to MySQL:', err);
        res.status(500).send('Internal Server Error');
    });
});

/* PUT clientes listing. */
router.put('/', function(req, res, next) {
    res.send('respond with a resource PUT');
});

/* POST clientes listing. */
router.post('/', function(req, res, next) {
    res.send('respond with a resource POST');
});

/* DELETE clientes listing. */
router.delete('/', function(req, res, next) {
    res.send('respond with a resource DELETE');
});

module.exports = router;
