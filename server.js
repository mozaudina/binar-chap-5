const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("bisanih");
});

const userData = {
    email: "mozaudina@gmail.com",
    password: "1234567",
    address: "jakarta"
};

app.get("/", (req, res) => {
    res.render("index");
  });

app.get("/game", (req, res) => {
    res.render("game");
  });

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    const loginReq = req.body;
    if (loginReq.email !== userData.email) {
      res.status(400).send({
        message: "Email tidak terdaftar",
      });


} else if (loginReq.password !== userData.password) {
        res.status(400).send({ message: "Password Salah" });
      }
      res.status(200).send({
        message: "Login Berhasil",
        data: userData,
      });
    });