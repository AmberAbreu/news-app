export {};

const router = require("express").Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
    try {
        const collections = await prisma.collection.findMany();
        res.json(collections);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
