const express = require("express");
const UserRouter = require("./user.routes");
const db = require("./config/db");

class App {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.setupMiddleware();
    this.setupRoutes();
    this.setupErrorHandler();
    // this.setupDatabase(); // Call setupDatabase method
  }

  setupMiddleware() {
    this.app.use(express.json({ limit: "50mb" })); // Add this line to parse JSON bodies
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
      return res
        .status(err.status ?? 500)
        .json({ message: err.message ?? "Something went wrong" });
    });
  }
  start() {
    this.app.listen(this.port, () => {
      console.info("Starting server on port " + this.port);
    });
  }

  close() {
    if (this.server) {
      this.server.close();
    }
  }
}

let server = new App();
server.start();
