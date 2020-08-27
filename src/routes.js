const HealthController = require("./controllers/HealthController");
const FilmsController = require("./controllers/FilmsController");

module.exports = app => {
  app.get("/health/check", HealthController.ping);

  app.get("/films", FilmsController.list);

  app.get("/films/:id", FilmsController.find);
};
