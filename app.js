// app.js
const express = require('express');
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(morgan(":method :url :status :response-time ms"));

app.get('/', (req, res) => res.json({ message: 'Hello, DevOps!' }));
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

// app.listen(PORT, () => console.log(`App running on port ${PORT}`));


module.exports = app;