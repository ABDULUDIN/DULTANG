//ex[ress
const express = require('express');
const app = express();
const port = 47598;

app.get('/', (req, res) => res.send('Aoi.js'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
