const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

const clientesController = require('../controllers/clientesController');

/* GET home page. */
router.get('/',  clientesController.findAll); 

/* PUT clientes listing. */
router.put('/', clientesController.save); 

/* POST clientes listing. */
router.post('/',  clientesController.update);

/* DELETE clientes listing. */
router.delete('/:id', clientesController.remove);

module.exports = router;
