async function insertNewVote(prisma, pollId, voterName, voteOption) {
    return prisma.vote.create({
        data: {
            voterName: voterName,
            votedOption: voteOption,
            pollId: pollId
        }
    });
}

module.exports = insertNewVote;