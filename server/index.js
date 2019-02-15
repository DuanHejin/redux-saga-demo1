const express = require('express');
const {users} = require('./mock/mock-users');

const app = express();
const port = 3001;

const domain = "/api"

app.get(`${domain}/`, (req, res) => {
  res.send('success');
});

app.get(`${domain}/users`, (req, res) => {
  res.json(users);
});

app.get(`${domain}/user/:id`, (req, res) => {
  const id = req.params.id;
  res.json(users.find((user) => user.id === Number(id)));
});

app.listen(port, () => {
  console.log(`server is running on ${port} port`);
});