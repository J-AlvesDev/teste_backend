const express = require("express");
const app = express();

let usuarios = [];

//rota para criar um usuario
app.post("/usuarios", (request, response) => {
  console.log(request);

  response.status(200).send("tudo ok");
});

app.listen(3001, () => {
  console.log("Servidor Ativo");
});
