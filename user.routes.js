const express = require("express");
const UserController = require("./user.controller");

class UserRouter {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.post("/register", UserController.login);
    this.router.post("/login", UserController.login);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = UserRouter;
