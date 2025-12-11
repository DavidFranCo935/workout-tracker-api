// src/middlewares/validate.middleware.js
function requireFields(fields = []) {
  return (req, res, next) => {
    const missing = fields.filter(f => !req.body || req.body[f] === undefined || req.body[f] === '');
    if (missing.length) {
      return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}` });
    }
    next();
  };
}

module.exports = { requireFields };
