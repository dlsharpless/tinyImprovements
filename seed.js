const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tinyImprovements_db"
);

const userSeed = [
  {
    name: "Andrew Kemp"
  },
  {
    name: "Dustin Sharpless"
  },
  {
    name: "Grace Ho"
  },
  {
    name: "Walter Mazariego"
  }
];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
