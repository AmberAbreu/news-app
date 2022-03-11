/*
  Warnings:

  - Added the required column `collectionId` to the `Story` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Story` table without a default value. This is not possible if the table is not empty.
  - Made the column `link` on table `Story` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Story" ADD COLUMN     "collectionId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "link" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
