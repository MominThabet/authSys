const express = require('express');

const api = require('./routes/api_v1');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ ok: true });
});

app.use('/api/v1', api);

module.exports = app;
