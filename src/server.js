const server = require("./config")();

server.get("/", (request, response) => {
    response.redirect("/polls")
});

server.get("/polls", (request, response) => {
    const polls = require("./queries/polls/getPolls")();
    response.render('polls.hbs', { polls })
});

server.get("/polls/:pollId", (request, response) => {
    const { pollId } = request.params;
    const poll = require("./queries/polls/getPollById")(pollId);

    response.render('poll.hbs', { poll })
});
