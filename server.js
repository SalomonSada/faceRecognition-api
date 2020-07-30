// importación de dependencias
const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "salojsc8264",
    database: "smart_brain",
  },
});
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const image = require("./controllers/image");
const profile = require("./controllers/profile");
//
// invocación de dependencias
const app = express();
app.use(express.json());
app.use(cors());
//

// app.get("/", (req, res) => {
//   res.send(database.user);
// });

app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile.handleProfile(req, res, db);
});

app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

app.post("/imageurl", (req, res) => {
  image.handleAPICall(req, res);
});

const DATABASE_URL = process.env.DATABASE_URL;
app.listen(3001, () => console.log(`Server is runing in ${DATABASE_URL}`));

// console.log(process.env);
