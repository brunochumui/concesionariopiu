module.exports = app => {
  const solicitudes = require("../controllers/solicitud.controller.js");
  const router = require("express").Router();

  router.post("/", solicitudes.create);
  router.get("/", solicitudes.findAll);

  app.use("/api/solicitudes", router);
};
