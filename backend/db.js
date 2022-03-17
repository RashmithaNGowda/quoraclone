const mongoose = require("mongoose");

const url =
  "mongodb://rashmitha:rashmitha@cluster0-shard-00-00.cbdea.mongodb.net:27017,cluster0-shard-00-01.cbdea.mongodb.net:27017,cluster0-shard-00-02.cbdea.mongodb.net:27017/quoraa?ssl=true&replicaSet=atlas-pkahn3-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
