function getPollById(prisma, pollId) {
    return prisma.poll.findUnique({
        where: {
            id: pollId
        },
        include: {
            votes: true
        }
    })
}

module.exports = getPollById;