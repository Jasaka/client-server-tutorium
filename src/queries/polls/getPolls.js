function getPolls(){
    const polls = [
        { id: "1", name: "First Poll" },
        { id: "2", name: "Second Poll" },
        { id: "3", name: "Third Poll" },
    ];

    console.log("polls", polls);

    return polls;
}

module.exports = getPolls;