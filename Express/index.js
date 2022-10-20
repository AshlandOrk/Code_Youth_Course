const express = require("express");
const app = express();
const router1 = express.Router();
const router2 = express.Router();

app.get("/", (req, res) => res.send("Home Page"));

app.get("/about", (req, res) => res.send("About Us Page"));

app.use("/user", router1);
app.use("/admin", router2);
app.listen(8080, () => console.log("server running on port 8080"));
