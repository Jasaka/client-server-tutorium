-- CreateEnum
CREATE TYPE "VoteOption" AS ENUM ('YES', 'NO', 'ABSTENTION');

-- CreateTable
CREATE TABLE "Poll" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Poll_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Poll_id_key" ON "Poll"("id");
