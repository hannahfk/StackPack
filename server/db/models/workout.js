const Sequelize = require("sequelize");
const db = require("../db");

const Workout = db.define("workout", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  calTotal: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  streak: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Workout;
