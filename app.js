// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ message: 'Hello, DevOps!' }));
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

// app.listen(PORT, () => console.log(`App running on port ${PORT}`));


module.exports = app;