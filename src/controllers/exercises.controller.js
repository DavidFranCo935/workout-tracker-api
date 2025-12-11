// src/controllers/exercises.controller.js
let exercises = [
  { id: "e1", name: "Push up", muscle: "chest", createdAt: new Date().toISOString() }
];

const list = (req, res) => {
  const { muscle } = req.query;
  let result = exercises;
  if (muscle) result = result.filter(e => e.muscle === muscle);
  res.status(200).json(result);
};

const getById = (req, res) => {
  const ex = exercises.find(x => x.id === req.params.id);
  if (!ex) return res.status(404).json({ error: "Exercise no encontrado" });
  res.status(200).json(ex);
};

const create = (req, res) => {
  const { name, muscle } = req.body;
  const newEx = { id: `${Date.now()}`, name, muscle, createdAt: new Date().toISOString() };
  exercises.push(newEx);
  res.status(201).json(newEx);
};

const replace = (req, res) => {
  const idx = exercises.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Exercise no encontrado" });
  const { name, muscle } = req.body;
  exercises[idx] = { ...exercises[idx], name, muscle };
  res.status(200).json(exercises[idx]);
};

const patch = (req, res) => {
  const idx = exercises.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Exercise no encontrado" });
  exercises[idx] = { ...exercises[idx], ...req.body };
  res.status(200).json(exercises[idx]);
};

const remove = (req, res) => {
  const idx = exercises.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Exercise no encontrado" });
  exercises.splice(idx, 1);
  return res.status(204).send();
};

module.exports = { list, getById, create, replace, patch, remove };
