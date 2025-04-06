const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'Alice', desc: 'first' },
  { id: 2, name: 'Bob', desc: 'second' },
];

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

app.get('/users', (req, res) => {
  res.status(200).json({ users });
});

app.post('/users', (req, res) => {
  const { name, desc } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json({ message: 'User created', user: newUser });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});