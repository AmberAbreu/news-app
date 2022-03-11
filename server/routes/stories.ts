export {};

const router = require("express").Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
    try {
        const stories = await prisma.story.findMany();
        res.json(stories);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const story = await prisma.story.findUnique({
            where: { id: Number(id) },
        });
        res.json(story);
    } catch (error) {
        next(error);
    }
});

router.delete(`/:id`, async (req, res, next) => {
    try {
        const { id } = req.params;
        const story = await prisma.story.delete({
            where: { id: Number(id) },
        });
        res.json(story);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
