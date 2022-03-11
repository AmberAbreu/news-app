import express from "express";

const collections = require("./collections");
const stories = require("./stories");

const router = express.Router();

router.use("/collections", collections);
router.use("/stories", stories);

module.exports = router;
