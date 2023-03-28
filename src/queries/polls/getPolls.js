function getPolls(prisma){
    const polls = prisma.poll.findMany();

    console.log("polls", polls);

    return polls;
}

module.exports = getPolls;