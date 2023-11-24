module.exports = app => {
  const orders = require("../controllers/orders.controller.js");

  var router = require("express").Router();

  // Create a new orders
  router.post("/create", orders.create);

  // Retrieve all orders
  router.get("/", orders.findAll);

  // Retrieve a single order with id
  router.get("/search/:id", orders.findOne);

  // Update a order with id
  router.put("/update/:id", orders.update);

  // Delete a order with id
  router.delete("/delete/:id", orders.delete);

  // Delete all order
  router.delete("/", orders.deleteAll);

  app.use("/api/orders", router);
};
