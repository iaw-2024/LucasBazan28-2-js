const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set('views', path.join(__dirname, '../express'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/cliente_servidor/:tabla?", (req, res) => {
  fs.readFile(path.join(__dirname, '../datos.json'), 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          res.status(500).send("Error reading data");
      } else {
          const datos = JSON.parse(data);
          let tabla = '<table>';
          datos[req.params.tabla].forEach(objeto => {
              tabla += '<tr>';
              for (let propiedad in objeto) {
                  tabla += '<td>' + objeto[propiedad] + '</td>';
              }
              tabla += '</tr>';
          });
          tabla += '</table>';
          res.send(tabla);
      }
  });
});


app.get("/express/:tabla?", (req, res) => {
  fs.readFile(path.join(__dirname, '../datos.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const datos = JSON.parse(data);
      datos.tabla = req.params.tabla || null;
      app.set('views', path.join(__dirname, '../express'));
      res.render('index', datos);
    }
  });
});
  

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;