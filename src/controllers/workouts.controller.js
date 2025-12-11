// src/controllers/workouts.controller.js
let workouts = [
  { id: "w1", title: "Full body", description: "Routine full body", createdAt: new Date().toISOString() }
];

const list = (req, res) => {
  const { search } = req.query;
  let result = workouts;
  if (search) result = result.filter(w => w.title.toLowerCase().includes(search.toLowerCase()));
  res.status(200).json(result);
};

const getById = (req, res) => {
  const w = workouts.find(x => x.id === req.params.id);
  if (!w) return res.status(404).json({ error: "Workout no encontrado" });
  res.status(200).json(w);
};

const create = (req, res) => {
  const { title, description } = req.body;
  const newW = { id: `${Date.now()}`, title, description, createdAt: new Date().toISOString() };
  workouts.push(newW);
  res.status(201).json(newW);
};

const replace = (req, res) => {
  const idx = workouts.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Workout no encontrado" });
  const { title, description } = req.body;
  workouts[idx] = { ...workouts[idx], title, description };
  res.status(200).json(workouts[idx]);
};

const patch = (req, res) => {
  const idx = workouts.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Workout no encontrado" });
  workouts[idx] = { ...workouts[idx], ...req.body };
  res.status(200).json(workouts[idx]);
};

const remove = (req, res) => {
  const idx = workouts.findIndex(x => x.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Workout no encontrado" });
  workouts.splice(idx, 1);
  return res.status(204).send();
};

module.exports = { list, getById, create, replace, patch, remove };
