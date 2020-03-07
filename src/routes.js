const FilmsController = require("./controllers/FilmsController");

module.exports = app => {
  app.get("/films", FilmsController.list);

  app.get("/films/:id", FilmsController.find);
};
