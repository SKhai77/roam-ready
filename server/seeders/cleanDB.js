// Import the models and connection files
const models = require("../models");
const db = require("../config/connection");

// Exports an asynchronous function that cleans a specified collection in the database
module.exports = async (modelName, collectionName) => {
  try {
    // Check if exists for the given model
    let modelExists = await models[modelName].db.db
      .listCollections({
        name: collectionName,
      })
      .toArray();

    //  If the collection exists, drop/delete it from the database
    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    // Throw an error if there is any problems
    throw err;
  }
};
