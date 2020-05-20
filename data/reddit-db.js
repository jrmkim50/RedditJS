const mongoose = require("mongoose");
assert = require("assert");
const url = "mongodb+srv://jeremykim:Skadden200@cluster0-sv6jt.mongodb.net/test";
mongoose.Promise = global.Promise;
mongoose.connect(
    url, {useNewUrlParser: true},
    function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to database");
    }
)

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;
