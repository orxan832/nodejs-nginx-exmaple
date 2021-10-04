const express = require('express');

const app = express();

app.get('/', (req, res) => res.send(`İsteğin cevaplandığı port:  ${port}`));

app.listen(5000, console.log('Backend was running'));