-- DropForeignKey
ALTER TABLE "Story" DROP CONSTRAINT "Story_collectionId_fkey";

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
