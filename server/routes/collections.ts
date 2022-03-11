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

router.get(`/:id`, async (req, res, next) => {
    try {
        const { id } = req.params;
        const collection = await prisma.collection.findUnique({
            where: { id: Number(id) },
        });
        res.json(collection);
    } catch (error) {
        next(error);
    }
});

router.post(`/`, async (req, res, next) => {
    try {
        const { title, description } = req.body;

        const result = await prisma.collection.create({
            data: {
                title,
                description,
            },
        });
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const collection = await prisma.collection.update({
            where: { id: Number(id) },
            data: { ...req.body },
        });
        res.json(collection);
    } catch (error) {
        next(error);
    }
});

router.delete(`/:id`, async (req, res, next) => {
    try {
        const { id } = req.params;
        const collection = await prisma.collection.delete({
            where: { id: Number(id) },
        });
        res.json(collection);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
