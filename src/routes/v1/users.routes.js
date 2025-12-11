// src/routes/v1/users.routes.js
const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/users.controller');
const { requireFields } = require('../../middlewares/validate.middleware');

// LIST + filters
router.get('/', ctrl.list);

// GET by id
router.get('/:id', ctrl.getById);

// POST create (require name,email)
router.post('/', requireFields(['name','email']), ctrl.create);

// PUT replace (require name,email)
router.put('/:id', requireFields(['name','email']), ctrl.replace);

// PATCH partial update
router.patch('/:id', ctrl.patch);

// DELETE
router.delete('/:id', ctrl.remove);

module.exports = router;
