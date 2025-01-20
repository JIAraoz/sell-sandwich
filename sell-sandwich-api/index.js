
const port = 3000
const {conn} =  require("./src/db")
const {app} = require('./src/server')

conn.sync({ force: true }).then(() => {
  console.log("Conexion con base de datos con exito");
  app.listen(port, () => {
    console.log("Servidor levantado con exito");
  });
})