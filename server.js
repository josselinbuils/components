const express = require('express');
const serveStatic = require('serve-static');

const PORT = 9000;

const app = express();

app.use(process.env.HTTP_PREFIX || '/', serveStatic('./doc'));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
