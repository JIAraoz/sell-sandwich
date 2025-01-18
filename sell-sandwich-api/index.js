const express = require('express')
const app = express()
const port = 3000

const {conn} =  require("./src/db")
conn.sync({ force: false }).then(() => {
  console.log("Conexion con base de datos con exito");
  app.listen(port, () => {
    console.log("Servidor levantado con exito");
  });
})