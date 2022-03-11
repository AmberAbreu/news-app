import { collections } from "./collections";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//run the seed use CLI command: npx prisma db seed

async function main() {
    for (let collection of collections) {
        await prisma.collection.create({
            data: collection,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
