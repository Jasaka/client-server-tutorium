function getPollById(pollId){
    const polls = [
        { id: "1", name: "First Poll" },
        { id: "2", name: "Second Poll" },
        { id: "3", name: "Third Poll" },
    ];

    return polls.find(poll => poll.id === pollId);
}

module.exports = getPollById;