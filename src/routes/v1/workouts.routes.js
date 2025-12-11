const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/workouts.controller');
const { requireFields } = require('../../middlewares/validate.middleware');

router.get('/', ctrl.list);
router.get('/:id', ctrl.getById);
router.post('/', requireFields(['title']), ctrl.create);
router.put('/:id', requireFields(['title']), ctrl.replace);
router.patch('/:id', ctrl.patch);
router.delete('/:id', ctrl.remove);

module.exports = router;
