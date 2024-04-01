const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

const produtosController = require('../controllers/produtosController');

/* GET home page. */
router.get('/',  produtosController.findAll); 

/* PUT clientes listing. */
router.put('/', produtosController.save); 

/* POST clientes listing. */
router.post('/',  produtosController.update);

/* DELETE clientes listing. */
router.delete('/:id', produtosController.remove);


module.exports = router;
