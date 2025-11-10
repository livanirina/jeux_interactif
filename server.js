const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//route principale makany am index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

