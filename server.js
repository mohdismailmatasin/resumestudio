const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const isProd = process.env.NODE_ENV === 'production';
const distExists = fs.existsSync(path.join(__dirname, 'dist', 'index.html'));
const staticDir = (isProd && distExists) ? path.join(__dirname, 'dist') : __dirname;

app.use(express.static(staticDir));
if (staticDir !== __dirname) {
  app.use('/vendor', express.static(path.join(__dirname, 'vendor')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
