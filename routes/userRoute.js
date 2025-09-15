const express = require("express");
const {
  create,
  fetch,
  update,
  deleteUser,
} = require("../controller/userController.js"); // Add update

const route = express.Router();

route.post("/create", create);
route.get("/fetch", fetch);
route.put("/update/:id", update); // Add update route
route.delete("/delete/:id", deleteUser);

module.exports = route;
