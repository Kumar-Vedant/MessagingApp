const { Router } = require("express");
const authController = require("../controllers/authController");
const authRouter = Router();

// authRouter.get("/register", authController.register);
// authRouter.post("/login", authController.login);

module.exports = authRouter;
