import express from "express";

const app = express();
app.use(express.json());

let usuarios = [];

//rota para criar um usuario
app.post("/usuarios", (request, response) => {
  usuarios.push(request.body);

  response.status(201).json(request.body);
});

app.get("/usuarios", (request, response) => {
  console.log(request);

  response.status(200).json(usuarios);
});

app.listen(3001, () => {
  console.log("Servidor Ativo!");
});
