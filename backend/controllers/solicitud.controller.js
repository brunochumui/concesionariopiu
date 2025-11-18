const db = require("../models");
const Solicitud = db.solicitudes;

exports.create = (req, res) => {
  Solicitud.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ error: err.message }));
};

exports.findAll = (req, res) => {
  Solicitud.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ error: err.message }));
};
