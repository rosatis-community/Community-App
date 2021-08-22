const express = require('express');
const { resolve } = require('path');
const app = express();
const portNumber = 3000;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.get('/*', (request, response) => {
  response.sendFile(resolve(__dirname, sourceDir, 'index.html'))
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
