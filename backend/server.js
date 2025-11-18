const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = require("./models");

db.sequelize.sync().then(() => {
  console.log("Base de datos sincronizada.");
});

require("./routes/solicitud.routes")(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
