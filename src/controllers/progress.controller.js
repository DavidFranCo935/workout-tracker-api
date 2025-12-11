// src/controllers/progress.controller.js
let progresses = [
  { id: "p1", userId: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611", workoutId: "w1", date: new Date().toISOString(), notes: "first" }
];

const list = (req, res) => {
  const { userId } = req.query;
  let result = progresses;
  if (userId) result = result.filter(p => p.userId === userId);
  res.status(200).json(result);
};

const getById = (req, res) => {
  const p = progresses.find(x => x.id === req.params.id);
  if (!p) return res.status(404).json({ error: "Registro no encontrado" });
  res.status(200).json(p);
};

const create = (req, res) => {
  const { userId, workoutId, date, notes } = req.body;
  const newP = { id: `${Date.now()}`, userId, workoutId, date: date || new Date().toISOString(), notes };
  progresses.push(newP);
  res.status(201).json(newP);
};

const replace = (req, res) => {
  const idx = progresses.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Registro no encontrado" });
  const { userId, workoutId, date, notes } = req.body;
  progresses[idx] = { ...progresses[idx], userId, workoutId, date, notes };
  res.status(200).json(progresses[idx]);
};

const patch = (req, res) => {
  const idx = progresses.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Registro no encontrado" });
  progresses[idx] = { ...progresses[idx], ...req.body };
  res.status(200).json(progresses[idx]);
};

const remove = (req, res) => {
  const idx = progresses.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Registro no encontrado" });
  progresses.splice(idx, 1);
  return res.status(204).send();
};

module.exports = { list, getById, create, replace, patch, remove };
