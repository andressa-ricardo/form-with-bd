import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { query } from "./database";

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


function createUser(nome:string, email:string, senha:string | number) {
  return query(`INSERT INTO formulario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}')`)
}

function getUser(){
  return query("SELECT * FROM `formulario`")
}

app.get("/", (req, res) => {
  res.send("servidor ligado");
});

app.post("/register", async (req, res) => {
  const { nome, email, senha } = req.body;
  await createUser(nome, email, senha)
  res.sendStatus(200);
});

app.get("/users", async (req, res) => {
  const infosUser = await getUser();
  res.send(infosUser);
});

app.listen(3000, () => {
  console.log("funcionando");
});
