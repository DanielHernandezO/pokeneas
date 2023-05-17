const express = require('express');
const path = require('path')
const {routes} = require('./webserver/routes');
const {startServer} = require('./webserver/server')
const app = express();
const port = 80;

app.set('views',path.join(__dirname,'application/views'));
app.set('view engine','ejs')
startServer(app, port);
routes(app, express);

module.exports = {
    app,
};