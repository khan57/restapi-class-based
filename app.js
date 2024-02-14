const express = require("express");
const UserRouter = require("./user.routes");
class App {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.setupRoutes();
    this.setupErrorHandler();
  }

  setupRoutes() {
    const userRouter = new UserRouter().getRouter();
    this.app.use("/users", userRouter);
    this.app.use((req, res, next) => {
      console.log(404, req.method + " " + req.url);
      return next({ status: 404, message: "Resource not found" });
    });
  }

  setupErrorHandler() {
    this.app.use((err, req, res, next) => {
      console.log(err);
      console.log(err.stack);
      return res.status(500).json({ message: "Something went wrong" });
    });
  }
  start() {
    this.app.listen(this.port, () => {
      console.log("Starting server on port " + this.port);
    });
  }
}

let server = new App();
server.start();
