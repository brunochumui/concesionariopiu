module.exports = (sequelize, Sequelize) => {
  const Solicitud = sequelize.define("solicitud", {
    nombre: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    mensaje: { type: Sequelize.TEXT }
  });

  return Solicitud;
};
