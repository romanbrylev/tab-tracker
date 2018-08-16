const AuthenticationController = require("./contollers/AuthenticationController")
const AuthenticationControllerPolicy = require("./policies/AuthenticationContollerPolicy")

module.exports = (app) => {
  app.post("/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
