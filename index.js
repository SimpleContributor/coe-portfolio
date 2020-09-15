const express = require('express');
const path = require('path');

const app = express();
const buildPath = path.join(__dirname, 'coe-portfolio/build');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/coe-portfolio/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);
