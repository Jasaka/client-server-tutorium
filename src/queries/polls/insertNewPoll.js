function insertNewPoll(prisma, pollName){
    return prisma.poll.create({
        data: {
            name: pollName
        }
    })
}

module.exports = insertNewPoll;