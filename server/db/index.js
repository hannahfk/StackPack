//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/user");
const Workout = require("./models/workout");
// const Order = require("./models/order");
// const Order_Product = require("./models/order_product");
//associations could go here!
// Order.belongsTo(User);
// User.hasMany(Order);

User.hasMany(Workout)
// Workout.belongsToMany(User, { through: Order_Product });

module.exports = {
  db,
  models: {
    User,
    Workout,
    // Order,
    // Order_Product,
  },
};