const pool = require("./config/db");
class UserController {
  static LoggedInMessage = "Logged in Successfully";
  static RegisterMessage = "Registered Successfully";

  static async login(req, res, next) {
    console.log(req.body);
    // let { email, password } = req.body;
    // console.log(email, password);
    // const response = await pool.query("select * from users");
    // console.log(response);
    return res.json({
      response: "this.RegisterMessage",
    });
  }

  static register(payload) {
    let { email, password, fullName } = payload;
    return this.RegisterMessage;
  }
}

module.exports = UserController;
