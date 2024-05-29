const express = require('express');
const path = require('path');

const app = express();
const port = 4400;

// Ustawienie ścieżki do katalogu, w którym znajdują się pliki HTML
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
    console.log(`Serwer uruchomiony w trybie deweloperskim na http://localhost:${port}/`);
  });