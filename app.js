const express = require('express');
const app = express();


const password = "admin123";

app.get('/', (req, res) => {
  res.send("Todo App Running");
});

app.get('/greet', (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello ${name}</h1>`);
});

app.listen(3000, () => console.log("Server running"));
