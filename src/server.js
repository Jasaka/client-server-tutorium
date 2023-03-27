const server = require("./config")();

server.get("/", (request, response) => {
    response.redirect("/polls")
});

server.get("/polls", (request, response) => {
    response.render('polls.hbs')
});

server.get("/polls/:pollId", (request, response) => {
    const { pollId } = request.params;

    response.render('poll.hbs', { pollId })
});

server.get("/api", (request, response) => {
    response.json({ message: "Hello Api" });
    response.end();
});

