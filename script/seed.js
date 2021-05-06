"use strict";

const {
  db,
  models: { User, Workout },
} = require("../server/db");

const users = [
  {
    name: "AJ123",
    password: "123",
    email: "ab@harvard.edu",
  },
];

const workouts = [
  {
    name: "squats",
    duration: 45,
    calTotal: 340,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    const newUsers = await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
    // const newProducts = await Promise.all(
    //   products.map((product) => {
    //     return Workout.create(workout);
    //   })
    // );

    const newWorkout = await Workout.create({
      name: "squats",
      duration: 30,
      calTotal: 100,
      streak: 3,
    });
  } catch (err) {
    console.log(err);
  }
};

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
