const express = require("express"); // --> asi importamos express

const app = express(); // --> es la forma de usar express

app.use(express.json()); // --> siempre usar esto para que pueda leer data en json.

app.listen(3000); // --> asignar una entrada en el localhost donde enviaremos la información.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// dependencies injections :
//donde en server.js tiene las dependencias (ya importadas) db y bcrypt
//Server.js
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt); // db, bcrypt => estan siendo inyectadas
});
//register.js
const handleRegister = (req, res, db, bcrypt) => {}; // db, bcrypt estan siendo inyectadoss
//
process.env
