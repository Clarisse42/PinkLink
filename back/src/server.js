const express = require('express');
const app = express();
const server = require('http').createServer(app);
const middlewares = require('./middlewares');
const check = require('./checkers');
const url = require('./url');

middlewares(app);

app.get('/:urlId', url.manager.redirectUrl);
app.post('/api/addShortUrl', check.checkUrl, url.manager.addShortUrl);
app.get('/api/getAllShortUrl', url.manager.getAllShortUrl);
app.delete('/api/deleteShortUrl/:urlId', url.manager.deleteShortUrl)

module.exports.listen = (port) =>
    server.listen(port, () => console.log('Server listen on 127.0.0.1:' + port + ' in mode ' + process.env.NODE_ENV));
