const mongoose = require("mongoose");

const URI = "";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    })
}

module.exports = connectDB;
