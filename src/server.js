const {server, prisma} = require("./config")();

server.get("/", (request, response) => {
    response.redirect("/polls")
});

server.get("/polls", async (request, response) => {
    const polls = await require("./queries/polls/getPolls")(prisma);
    response.render('polls.hbs', {polls})
});

server.post("/polls", (request, response) => {
    const { name } = request.body;

    if (!name || name === "") {
        return response.sendStatus(400);
    }

    require("./queries/polls/insertNewPoll")(prisma, name)
        .then(() => response.sendStatus(200))
        .catch(() => response.sendStatus(500));
});

server.get("/polls/:pollId", async (request, response) => {
    const {pollId} = request.params;
    const poll = await require("./queries/polls/getPollById")(prisma, pollId);

    response.render('poll.hbs', {poll})
});
