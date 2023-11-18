const express = require('express');
const router = express.Router();

const bloqueoCtrl = require('../controllers/bloqueo.controller');

router.get('/', bloqueoCtrl.getBloqueos);
router.post('/', bloqueoCtrl.createBloqueo);
router.get('/:id', bloqueoCtrl.getBloqueo);
router.put('/:id', bloqueoCtrl.editBloqueo);
router.delete('/:id', bloqueoCtrl.deleteBloqueo);


module.exports=router;