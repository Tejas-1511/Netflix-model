const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    likedMovies: Array,
});

module.exports = mongoose.model("users", userSchema);