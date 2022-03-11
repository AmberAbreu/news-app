/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "Story" (
    "id" SERIAL NOT NULL,
    "link" TEXT,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);
