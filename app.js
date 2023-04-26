//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const dias = require(__dirname + "/dias.js");

const app = express();

const items = ["Servir y comer el almuerzo", "Sacar a Nana", "Hacer comida"];
const itemsTrabajo = [];

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("publica"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  const dia = dias.obtenElDia();
  res.render('lista', {
    tituloLista: dia,
    nuevoElementoDeListas: items
  });
});

app.post("/", function(req, res) {
    const item = req.body.nuevoItem;
if (req.body.lista === "Pendientes del trabajo" ) {
  itemsTrabajo.push(item);
  res.redirect("/trabajo");
} else {
  items.push(item);
  res.redirect("/");
}
});


app.get("/trabajo", function(req, res) {
  res.render('lista', {
    tituloLista: "Pendientes del trabajo",
    nuevoElementoDeListas: itemsTrabajo
  });
})

app.get("/sobre", function(req,res){
res.render("sobre");
})

app.listen(3000, function() {
  console.log("El servidor esta arriba");
})
