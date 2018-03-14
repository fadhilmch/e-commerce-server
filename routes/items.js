const express = require('express');
const router = express.Router();
const {findAll, create, destroy, update, findById} = require('../controllers/items.controller');

router.get('/', findAll);
router.post('/', create);

router.get('/:id', findById);
router.put('/:id', update);
router.delete('/:id', destroy);


module.exports = router;
