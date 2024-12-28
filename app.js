const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
// const morgan = require("morgan");
const path = require("path");

const app = express();
// const port = process.env.PORT;
const port = process.env.port;

const productRouter = express.Router();

// app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
    res.send("Hello World !! I'm products");
});

app.use("/products", productRouter);

// app.use("products", "../../public/products");
// app.use("products", "../../public/signin.html");

app.get("/", (req, res) => {
    res.render("index", { username: 'Prach Konphet', customers: ["Prawit", "Presan", "Prawat"] });
})

app.listen(port, () => {
    // debug("Listening on port" + chalk.green(" : "+port));
    console.log("Listening on port :" + port);
})