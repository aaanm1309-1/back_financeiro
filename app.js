const express = require('express');

const app = express();

app.get('/listar',(req,res) => {
  res.send("Extrato Financeiro Listar")
})

app.get('/',(req,res) => {
  res.send("Extrato Financeiro Home")
})

app.listen(3001, function (){
  console.log("Servidor iniiado na porta 3001: http://localhost:3001")
});