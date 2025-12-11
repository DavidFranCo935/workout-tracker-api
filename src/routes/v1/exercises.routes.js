const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/exercises.controller');
const { requireFields } = require('../../middlewares/validate.middleware');

router.get('/', ctrl.list);
router.get('/:id', ctrl.getById);
router.post('/', requireFields(['name']), ctrl.create);
router.put('/:id', requireFields(['name']), ctrl.replace);
router.patch('/:id', ctrl.patch);
router.delete('/:id', ctrl.remove);

module.exports = router;
