const express = require("express");

class Server {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use((req, res, next) => {
      res.header("Content-Type", "application/json; charset=utf-8");
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        req.header("access-control-request-headers" || "*")
      );
      res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

      if (req.method === "OPTIONS") {
        return res.status(204).send();
      }

      return next();
    });
  }

  routes() {
    require("./routes")(this.app);

    this.app.all("*", async (req, res, next) => {
      res.send({
        routes: ["films", "films/id"]
      });
    });
  }
}

module.exports = new Server().app;
