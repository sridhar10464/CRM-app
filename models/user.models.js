const mongoose = require("mongoose");

// Schema definition
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        unique: true,
        required: true
    },
})

module.exports = mongoose.model ("users", userSchema);