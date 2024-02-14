class UserController {
  static LoggedInMessage = "Logged in Successfully";
  static RegisterMessage = "Registered Successfully";

  static login(payload) {
    let { email, password } = payload;
    return this.LoggedInMessage;
  }

  static register(payload) {
    let { email, password, fullName } = payload;
    return this.RegisterMessage;
  }
}

module.exports = UserController;
