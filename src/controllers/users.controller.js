// src/controllers/users.controller.js
let users = [
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    name: "Carlos Navia",
    email: "carlos@example.com",
    role: "user",
    createdAt: "2025-09-12T12:00:00Z"
  }
];

const list = (req, res) => {
  const { role, search } = req.query;
  let result = users;
  if (role) result = result.filter(u => u.role === role);
  if (search) result = result.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));
  res.status(200).json(result);
};

const getById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
  res.status(200).json(user);
};

const create = (req, res) => {
  const { name, email, role } = req.body;
  const newUser = { id: `${Date.now()}`, name, email, role: role || 'user', createdAt: new Date().toISOString() };
  users.push(newUser);
  res.status(201).json(newUser);
};

const replace = (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return res.status(404).json({ error: "Usuario no encontrado" });
  users[idx] = { ...users[idx], name, email, role };
  res.status(200).json(users[idx]);
};

const patch = (req, res) => {
  const { id } = req.params;
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return res.status(404).json({ error: "Usuario no encontrado" });
  users[idx] = { ...users[idx], ...req.body };
  res.status(200).json(users[idx]);
};

const remove = (req, res) => {
  const { id } = req.params;
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return res.status(404).json({ error: "Usuario no encontrado" });
  users.splice(idx, 1);
  // DELETE exitoso: 204 No Content
  return res.status(204).send();
};

module.exports = { list, getById, create, replace, patch, remove };
