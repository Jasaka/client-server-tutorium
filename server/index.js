require("dotenv").config();
const express = require("express");
const server = express();

const port = process.env.PORT || 3000;

server.use(express.json());

server.get("/", (request, response) => {
    response.redirect("/polls")
});

server.get("/polls", (request, response) => {
    response.send("Here be all Polls");
    response.end();
});

server.get("/polls/:pollId", (request, response) => {
    const { pollId } = request.params;

    response.send("Poll with id: " + pollId);
    response.end();
});


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
