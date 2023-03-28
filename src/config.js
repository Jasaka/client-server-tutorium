function setMiddleware(server, express) {
    server.use(express.json());
}

function setStaticFolder(server, express, path) {
    server.use(express.static(path.join(__dirname, "public")));
}

function configureViewEngine(server, path) {
    const {engine} = require("express-handlebars");
    server.engine('hbs', engine({
        defaultLayout: 'main',
        extname: '.hbs',
    }));
    server.set('view engine', 'hbs');
    server.set('views', path.join(__dirname, 'views'));
}

function setupPrisma() {
    const {PrismaClient} = require("@prisma/client");
    return new PrismaClient();
}

function setupExpress() {
    const express = require("express");
    const server = express();
    const path = require("path");
    const port = process.env.PORT || 3000;
    setMiddleware(server, express)
    setStaticFolder(server, express, path);
    configureViewEngine(server, path);
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
    return server;
}

function configureServer() {
    require("dotenv").config();
    const prisma = setupPrisma();
    const server = setupExpress();
    return {server, prisma};
}

module.exports = configureServer;