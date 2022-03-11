import express from "express";
require("dotenv").config();
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

const routes = require("./routes/index.ts");

app.use("/api", routes);

const port = process.env.PORT || 3001;
app.listen(port, () =>
    console.log("REST API server ready at: http://localhost:3001")
);
