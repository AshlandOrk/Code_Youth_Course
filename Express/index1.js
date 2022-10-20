const express = require("express");
const app = express();
const error = express.Router();

app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("index"));

app.get("/about", (req, res) => res.render("about"));

app.listen(8080, () => console.log("Server is running"));
