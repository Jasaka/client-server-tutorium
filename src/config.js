function setMiddleware(server, express) {
    server.use(express.json());
}

function setStaticFolder(server, express, path) {
    server.use(express.static(path.join(__dirname, "public")));
}

function configureViewEngine(server, engine, path) {
    server.engine('hbs', engine({
        defaultLayout: 'main',
        extname: '.hbs',
    }));
    server.set('view engine', 'hbs');
    server.set('views', path.join(__dirname, 'views'));
}

function configureServer() {
    require("dotenv").config();
    const express = require("express");
    const server = express();
    const {engine} = require("express-handlebars");
    const path = require("path");
    const port = process.env.PORT || 3000;

    setMiddleware(server, express)
    setStaticFolder(server, express, path);

    configureViewEngine(server, engine, path);

    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });

    return server;
}

module.exports = configureServer;