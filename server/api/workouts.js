const router = require("express").Router();
const {
  models: { Workout },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const workouts = await Workout.findAll();
    res.send(workouts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
