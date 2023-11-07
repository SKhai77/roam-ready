// Import all the required files
const db = require("../config/connection");
const { User, Post } = require("../models");
const userSeeds = require("./userSeeds.json");
const postSeeds = require("./postSeeds.json");
const cleanDB = require("./cleanDB");

// Listening for the 'open' event on the database connection
db.once("open", async () => {
  try {
    await cleanDB("Post", "posts");

    await cleanDB("User", "users");

    await User.create(userSeeds);

    // Loop through the post seeds data to create a post and associate them with users
    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor } = await Post.create(postSeeds[i]);

      //  Find a user by their 'username' and updating their 'posts' field to include the newly created post
      const user = await User.findOneAndUpdate(
        { username: postAuthor },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }
  } catch (err) {
    // Handling errors
    console.error(err);
    process.exit(1);
  }

//  Log a sucess message and exit the process
  console.log("all done!");
  process.exit(0);
});
